// src/pages/api/search.ts
import type { APIRoute } from 'astro';
import { faqs } from '../../data/chatbot';
import { siteInfo } from '../../data/info';

export const prerender = false; 

// 1. SISTEMA DE RATE LIMITING EN MEMORIA (Mitiga ataques DoS)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const LIMIT_PER_MINUTE = 6; // Límite de consultas por minuto por IP

// Función de respaldo estratégica
function buscarEnFaqs(query: string): string {
  const q = query.toLowerCase();
  let respuestaEncontrada = null;

  for (const faq of faqs) {
    if (faq.keywords.some(kw => q.includes(kw))) {
      respuestaEncontrada = faq.answer;
      break;
    }
  }

  if (respuestaEncontrada) {
    return `### Información Preliminar sobre su Consulta\n\n${respuestaEncontrada}\n\n---\n### ¿Por qué confiar su caso al Estudio M&L?\nComprendemos que los conflictos legales y las obligaciones contables generan estrés. Nuestro diferencial es absorber esa carga por usted.\n\n- **Estrategia a medida:** Analizamos los vacíos legales y fiscales para su beneficio.\n- **Transparencia absoluta:** Le explicamos cada escenario posible con claridad.\n- **Acompañamiento constante:** Mantenemos un rol activo hasta la resolución de su caso.\n\n**Su tranquilidad es nuestra prioridad. Déjenos encargarnos del problema.**`;
  } 
  
  return `### Análisis Profesional Estricto Requerido\n\nSu consulta presenta particularidades que exigen una **evaluación exhaustiva y confidencial** por parte de nuestro equipo de especialistas. \n\nPara garantizar la máxima protección de su patrimonio o la resolución segura de su conflicto, no podemos emitir un dictamen automático. Es imperativo revisar los detalles concretos, plazos y documentación de su caso particular.\n\n**No deje su situación al azar ni deje pasar el tiempo. Un especialista está listo para diseñar su estrategia hoy mismo.**`;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 2. PROTECCIÓN CONTRA ATAQUES DE FUERZA BRUTA (Rate Limiting)
    const ip = clientAddress || 'unknown';
    const now = Date.now();
    const windowStart = now - 60000; // 1 minuto

    const clientData = rateLimit.get(ip);
    if (clientData && clientData.timestamp > windowStart) {
      if (clientData.count >= LIMIT_PER_MINUTE) {
        return new Response(JSON.stringify({ error: "Demasiadas peticiones. Intente en 1 minuto." }), { status: 429 });
      }
      clientData.count++;
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    // 3. VALIDACIÓN DE CABECERAS
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: "Formato no soportado." }), { status: 415 });
    }

    const body = await request.json();
    let query = body.query;

    // 4. VALIDACIÓN DEL PAYLOAD (Límite estricto de caracteres)
    if (!query || typeof query !== 'string') {
      return new Response(JSON.stringify({ error: 'Falta la consulta o es inválida' }), { status: 400 });
    }

    if (query.length > 350) {
      return new Response(JSON.stringify({ error: "La consulta excede el límite permitido de caracteres." }), { status: 413 });
    }

    // 5. SANITIZACIÓN BÁSICA DEL INPUT (Elimina símbolos extraños)
    query = query.replace(/[<>{}|=`\\]/g, '').trim();

    // --- CONEXIÓN A GROQ ---
    const apiKey = import.meta.env.GROQ_API_KEY;
    const context = faqs.map(f => `Palabras clave: ${f.keywords.join(', ')} -> Respuesta: ${f.answer}`).join('\n');

    let finalResponseText = '';

    if (apiKey) {
      const systemPrompt = `Eres el asistente legal y contable experto del ${siteInfo.name}. 
      Reglas estrictas de comportamiento:
      1. Responde SIEMPRE utilizando formato Markdown. Usa "###" para subtítulos, "**" para resaltar palabras clave, y viñetas ("-") para listas.
      2. Mantén un tono corporativo, autoritativo, resolutivo y persuasivo. Cero emojis.
      3. Tu objetivo principal es demostrar autoridad y guiar al cliente a la contratación. Usa esta información como base de conocimiento: ${context}.
      4. Estructura tu respuesta en tres partes: 
         - A) Respuesta directa o diagnóstico preliminar.
         - B) Los riesgos de no actuar correctamente.
         - C) Por qué el ${siteInfo.name} es la única opción segura para resolverlo.
      5. Si la pregunta está fuera de tu conocimiento, responde EXACTAMENTE esto: "Su caso requiere una auditoría legal o contable detallada. Las variables de su situación superan un análisis preliminar."`;

      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: query }
            ],
            temperature: 0.2, 
            max_tokens: 500
          })
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const aiAnswer = data.choices[0].message.content;
          
          if (aiAnswer.includes("requiere una auditoría legal o contable detallada")) {
             finalResponseText = buscarEnFaqs(query);
          } else {
             finalResponseText = aiAnswer;
          }

        } else {
          throw new Error('Groq API Error');
        }
      } catch (aiError) {
        finalResponseText = buscarEnFaqs(query);
      }
    } else {
      finalResponseText = buscarEnFaqs(query);
    }

    const whatsappText = encodeURIComponent(`Hola, realicé la siguiente consulta en su web y me gustaría avanzar con un asesoramiento profesional: "${query}"`);
    const finalMarkdown = `
${finalResponseText}

---
### Dé el siguiente paso
Nuestro equipo de especialistas está listo para realizar un análisis profundo de su situación y blindar sus intereses.

<a href="https://wa.me/${siteInfo.contact.whatsapp}?text=${whatsappText}" target="_blank" class="cta-whatsapp">
  Agendar Consulta con un Profesional
</a>`;

    return new Response(JSON.stringify({ answer: finalMarkdown }), {
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Alerta de Seguridad o Error Interno:", error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
}