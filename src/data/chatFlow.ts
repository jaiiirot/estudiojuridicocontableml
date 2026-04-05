// src/data/chatFlow.ts

export const WA_NUMBER = "5491127890450";

export interface ChatNode {
  message: string;
  options?: { label: string; next: string }[];
  isEnd?: boolean;
}

export const chatFlow: Record<string, ChatNode> = {
  inicio: {
    message: "Hola. Bienvenido al <strong>Estudio M&L</strong>. Estás hablando con la firma líder y con mayor tasa de éxito de la región. ¿En qué área necesitas a los mejores especialistas hoy?",
    options: [
      { label: "Asesoramiento Legal", next: "legal" },
      { label: "Gestión Contable / AFIP", next: "contable" },
      { label: "Tengo un problema complejo", next: "complejo" }
    ]
  },
  
  // --- RAMA LEGAL ---
  legal: {
    message: "Perfecto. Nuestro departamento jurídico es implacable. ¿Sobre qué tema puntual necesitas asesoramiento?",
    options: [
      { label: "Familia (Divorcios / Alimentos)", next: "familia" },
      { label: "Laboral (Despidos / ART / Trabajo en negro)", next: "laboral" },
      { label: "Sucesiones / Civil", next: "civil" },
      { label: "Volver al inicio", next: "inicio" }
    ]
  },
  familia: {
    message: "Los conflictos familiares requieren tacto pero máxima firmeza. Ya sea un divorcio exprés o reclamo de alimentos, somos los mejores blindando el patrimonio y los derechos de nuestros clientes. ¿Deseas que un especialista analice tu caso ahora mismo?",
    isEnd: true
  },
  laboral: {
    message: "Las empresas suelen aprovecharse de la desinformación. Nosotros no lo permitimos. Calculamos indemnizaciones exactas y logramos los mejores acuerdos en SECLO o juicios laborales. No dejes que se queden con tu dinero. ¿Agendamos una revisión?",
    isEnd: true
  },
  civil: {
    message: "Tramitamos sucesiones de forma ágil, resolvemos conflictos de alquileres y redactamos contratos inquebrantables. Somos garantía de seguridad jurídica. ¿Querés hablar con el equipo civil?",
    isEnd: true
  },

  // --- RAMA CONTABLE ---
  contable: {
    message: "Nuestros contadores mantienen tu rentabilidad a salvo de multas y recargos. ¿Qué servicio estás buscando?",
    options: [
      { label: "Monotributo y Recategorizaciones", next: "monotributo" },
      { label: "Liquidación de Sueldos y PyMES", next: "pymes" },
      { label: "Volver al inicio", next: "inicio" }
    ]
  },
  monotributo: {
    message: "Evitamos exclusiones y multas de AFIP. Dejá tus impuestos en manos de los mejores profesionales y enfocate en tu negocio. ¿Querés que revisemos tu situación fiscal?",
    isEnd: true
  },
  pymes: {
    message: "Optimizamos la carga fiscal y liquidamos sueldos con precisión milimétrica. Las mejores empresas de la zona confían en nosotros. ¿Coordinamos una auditoría para tu empresa?",
    isEnd: true
  },

  // --- FALLBACK / PROBLEMA COMPLEJO ---
  complejo: {
    message: "Entendemos. Si tu situación es muy específica o delicada, los sistemas automáticos no sirven. Necesitás que los mejores estrategas legales y contables del país analicen tus documentos en detalle. Hablá directamente con nuestros profesionales.",
    isEnd: true
  }
};