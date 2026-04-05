// src/data/faq.ts

export interface FAQ {
  keywords: string[];
  answer: string;
}

export const faqs: FAQ[] = [
  // ==========================================
  // ADMINISTRATIVO Y ATENCIÓN
  // ==========================================
  {
    keywords: ["horario", "hora", "abren", "cierran", "atencion", "dias"],
    answer: "Nuestro horario de atención presencial y virtual es de Lunes a Viernes de 12:00 a 18:00hs en nuestra oficina de Avellaneda."
  },
  {
    keywords: ["consulta", "precio", "honorarios", "cobran", "gratis", "costo", "pagar"],
    answer: "Las consultas profesionales tienen un costo de honorarios inicial. Sin embargo, este valor suele bonificarse o descontarse si usted decide avanzar con el trámite o juicio definitivo con nuestro estudio."
  },
  {
    keywords: ["ubicacion", "direccion", "donde", "oficina", "avellaneda", "llegar"],
    answer: "Nuestras oficinas centrales se encuentran en Av. Pres. Bartolomé Mitre 2443, Avellaneda, Buenos Aires. Trabajamos tanto de forma presencial como 100% online para todo el país."
  },

  // ==========================================
  // ÁREA CONTABLE E IMPUESTOS
  // ==========================================
  {
    keywords: ["monotributo", "recategorizacion", "afip", "impuestos", "facturacion", "categoria"],
    answer: "Es fundamental realizar la recategorización de AFIP en los meses de Enero y Julio para evitar multas o exclusiones de oficio. Nuestro departamento contable audita su facturación y se encarga de todo el proceso."
  },
  {
    keywords: ["embargo", "afip", "cuenta", "banco", "inhibicion", "bloqueada", "deuda"],
    answer: "Si AFIP o ARBA embargó sus cuentas bancarias, nuestro equipo contable y legal interviene urgentemente para regularizar la deuda, armar un plan de pagos y solicitar el levantamiento judicial del embargo."
  },
  {
    keywords: ["sueldos", "liquidacion", "cargas", "sociales", "f931", "empleados", "pymes"],
    answer: "Brindamos el servicio de liquidación mensual de sueldos, cargas sociales (F.931), sindicatos y asesoramiento integral para PyMES, evitando futuras contingencias laborales."
  },

  // ==========================================
  // DERECHO LABORAL
  // ==========================================
  {
    keywords: ["despido", "echaron", "indemnizacion", "liquidacion", "telegrama", "renuncia", "seclo"],
    answer: "Si lo despidieron, NO firme nada ni envíe telegramas sin asesoramiento previo. Debemos verificar inmediatamente que su liquidación final e indemnización sean correctas según su antigüedad y convenio."
  },
  {
    keywords: ["negro", "no registrado", "sin recibo", "gris", "parte en negro"],
    answer: "El trabajo no registrado o 'en negro' es ilegal. Mientras la relación laboral esté vigente, podemos intimar a su empleador mediante telegrama para que lo registre correctamente, bajo apercibimiento de reclamar severas multas de ley."
  },
  {
    keywords: ["art", "accidente", "trabajo", "medica", "alta", "comision", "srt", "in itinere"],
    answer: "Ante un accidente laboral o 'in itinere' (yendo al trabajo), la ART debe indemnizarlo. Si le otorgan el alta médica antes de tiempo o rechazan el siniestro, interponemos un recurso ante la Superintendencia de Riesgos del Trabajo."
  },
  {
    keywords: ["vacaciones", "jefe", "empleador", "dependencia", "descanso"],
    answer: "En relación de dependencia, su empleador no puede negarle el derecho a vacaciones. Si se las niegan u omiten otorgarlas en el período legal, podemos asesorarlo para intimar su otorgamiento formal."
  },

  // ==========================================
  // DERECHO DE FAMILIA
  // ==========================================
  {
    keywords: ["familia", "alimentos", "cuota", "retroactiva", "aguinaldo", "manutencion"],
    answer: "Tramitamos fijación, aumento o cese de cuota alimentaria. Tenga en cuenta que el aguinaldo (SAC) y bonos del progenitor también deben incluirse en el cálculo. Ante el no pago, ejecutamos embargos de sueldo."
  },
  {
    keywords: ["divorcio", "separacion", "express", "unilateral", "bienes", "casados"],
    answer: "En Argentina rige el divorcio unilateral; no necesita el consentimiento de su ex cónyuge para iniciarlo. Tramitamos el divorcio 'express' y gestionamos estratégicamente la división de bienes gananciales."
  },
  {
    keywords: ["viajar", "viaje", "hijo", "exterior", "autorizacion", "ex", "menor"],
    answer: "Para salir del país con un menor, requiere la autorización del otro progenitor. Si este se niega de forma injustificada, tramitamos una autorización judicial supletoria de urgencia."
  },
  {
    keywords: ["visitas", "contacto", "regimen", "impedimento", "ver", "hijos"],
    answer: "Si su ex pareja le impide el contacto con sus hijos, iniciamos de inmediato un plan de parentalidad o régimen de comunicación, y accionamos legalmente por impedimento de contacto."
  },

  // ==========================================
  // DERECHO CIVIL Y COMERCIAL
  // ==========================================
  {
    keywords: ["sucesion", "declaratoria", "herederos", "bienes", "fallecimiento", "fallecio"],
    answer: "Para disponer, vender o alquilar los bienes de un familiar fallecido, es obligatorio iniciar el juicio sucesorio. Nuestro equipo se encarga del proceso desde la declaratoria de herederos hasta la inscripción en el registro."
  },
  {
    keywords: ["herencia", "desheredar", "hijo", "legitima", "pareja"],
    answer: "La ley argentina protege la 'porción legítima', por lo que no se puede desheredar por completo a un heredero forzoso (hijos, padres, cónyuge). Si sus derechos fueron vulnerados, podemos accionar judicialmente."
  },
  {
    keywords: ["alquiler", "desalojo", "contrato", "garantia", "inquilino", "meses", "usurpacion"],
    answer: "Redactamos contratos de locación blindados. Si tiene problemas con inquilinos morosos o usurpadores, iniciamos el juicio de desalojo y la ejecución de alquileres contra las garantías."
  },
  {
    keywords: ["alcoholemia", "auto", "sacar", "control", "multa", "transito", "secuestro"],
    answer: "En un control con alcoholemia positiva le retendrán el vehículo y la licencia. Contamos con especialistas en derecho de faltas para presentar los descargos y gestionar la restitución de su vehículo."
  },

  // ==========================================
  // DERECHO PREVISIONAL
  // ==========================================
  {
    keywords: ["jubilacion", "aportes", "anses", "moratoria", "edad", "pension"],
    answer: "Si alcanzó la edad jubilatoria pero no tiene los 30 años de aportes, evaluamos su ingreso a una moratoria previsional (compra de aportes) para que pueda obtener su jubilación de igual manera."
  },
  {
    keywords: ["invalidez", "rti", "discapacidad", "enfermedad", "retiro"],
    answer: "Si sufre de una afección que le impide trabajar, gestionamos el Retiro Transitorio por Invalidez (RTI) ante ANSES y lo asesoramos frente a las Comisiones Médicas."
  }
];

export const fallbackMessage = "Esa es una consulta muy específica que involucra detalles técnicos. Le sugerimos que se comunique directamente con nuestros especialistas vía WhatsApp para una evaluación exhaustiva de su caso.";