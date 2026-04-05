// src/data/services.ts

export interface ServiceDetail {
  title: string;
  definition: string;
  howWeHelp: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    id: 'derecho-civil-y-comercial',
    title: 'Derecho Civil y Comercial',
    shortDesc: 'Asesoramiento y litigio en relaciones contractuales, blindaje patrimonial y resolución de conflictos entre privados o empresas.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200',
    details: [
      {
        title: "Sucesiones",
        definition: "Proceso legal mediante el cual se transmite el patrimonio (bienes, derechos y obligaciones) de una persona fallecida a sus herederos legítimos o testamentarios.",
        howWeHelp: "Realizamos el trámite de forma ágil, gestionando la declaratoria de herederos, inscripción de bienes y mediando en conflictos familiares para proteger el patrimonio sin dilaciones."
      },
      {
        title: "Contratos Comerciales",
        definition: "Acuerdos vinculantes que regulan las relaciones comerciales, estableciendo derechos, obligaciones y penalidades ante incumplimientos.",
        howWeHelp: "Redactamos y auditamos contratos blindados (alquileres, sociedades, franquicias) para evitar contingencias futuras y asegurar la rentabilidad de su negocio."
      },
      {
        title: "Ejecuciones y Cobros",
        definition: "Vía judicial rápida y forzada para exigir el pago de deudas documentadas (cheques rechazados, pagarés, expensas, facturas impagas).",
        howWeHelp: "Iniciamos intimaciones extrajudiciales de alto impacto y, de ser necesario, trabamos embargos preventivos rápidos para garantizar el recupero total de su capital."
      },
      {
        title: "Daños y Perjuicios",
        definition: "Acción legal para reclamar una indemnización económica por los daños materiales, físicos o morales sufridos por el accionar de un tercero.",
        howWeHelp: "Cuantificamos el daño real con peritos especialistas y negociamos agresivamente con aseguradoras o demandados para asegurar la máxima compensación posible."
      }
    ]
  },
  {
    id: 'derecho-de-familia',
    title: 'Derecho de Familia',
    shortDesc: 'Abordaje sensible pero firme en conflictos familiares, priorizando la protección de los menores y la justa división patrimonial.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
    details: [
      {
        title: "Divorcios (Express y Contenciosos)",
        definition: "Disolución legal del vínculo matrimonial, que puede ser solicitada de mutuo acuerdo o de forma unilateral por uno de los cónyuges.",
        howWeHelp: "Tramitamos su divorcio de forma expedita y diseñamos estrategias firmes para la división equitativa de los bienes gananciales, protegiendo su futuro económico."
      },
      {
        title: "Alimentos y Compensación",
        definition: "Derecho a percibir una cuota para cubrir las necesidades de los hijos, o una compensación económica si el divorcio generó un desequilibrio financiero en un cónyuge.",
        howWeHelp: "Calculamos el monto justo, iniciamos el reclamo urgente y actuamos implacablemente ante incumplimientos (embargos de sueldo, prohibición de salida del país)."
      },
      {
        title: "Régimen de Comunicación",
        definition: "Acuerdo legal que establece los tiempos, días y modalidades de contacto y cuidado que cada progenitor tendrá con sus hijos.",
        howWeHelp: "Elaboramos convenios de coparentalidad equilibrados e iniciamos acciones legales inmediatas ante el impedimento de contacto por parte del otro progenitor."
      },
      {
        title: "Filiación e Identidad",
        definition: "Acción jurídica para establecer (reconocimiento) o impugnar el vínculo legal entre padres e hijos biológicos.",
        howWeHelp: "Impulsamos demandas de reconocimiento con pruebas de ADN judicial, reclamando además los daños y perjuicios por la falta de reconocimiento oportuno."
      }
    ]
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral',
    shortDesc: 'Defensa estratégica en relaciones de trabajo. Representamos tanto a trabajadores vulnerados como a empresas que buscan mitigar riesgos.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1200',
    details: [
      {
        title: "Despidos y Trabajo en Negro",
        definition: "Ruptura del contrato laboral (con o sin causa) e irregularidades en la registración (trabajo no registrado o registrado deficientemente).",
        howWeHelp: "Redactamos el intercambio telegráfico (Cartas Documento), calculamos las multas de ley con exactitud y negociamos en el SECLO o tribunales para asegurar su indemnización."
      },
      {
        title: "Accidentes de Trabajo (ART)",
        definition: "Siniestros ocurridos durante la jornada laboral, in itinere (en el trayecto), o enfermedades profesionales derivadas de la tarea.",
        howWeHelp: "Rechazamos las altas médicas prematuras, acompañamos al trabajador a las Juntas Médicas y exigimos la indemnización real que la ART intenta evitar pagar."
      },
      {
        title: "Acoso Laboral (Mobbing)",
        definition: "Hostigamiento, maltrato psicológico o discriminación continuada hacia un trabajador en su entorno laboral.",
        howWeHelp: "Asesoramos en la recolección de pruebas, intimamos a la empresa para el cese del acoso y ejecutamos demandas por daños y despido indirecto."
      },
      {
        title: "Diferencias Salariales",
        definition: "Pago de un salario inferior al establecido por el Convenio Colectivo de Trabajo, horas extras impagas o falta de pago de comisiones.",
        howWeHelp: "Realizamos una auditoría contable de sus recibos de sueldo e intimamos legalmente a la empresa para el cobro retroactivo de todo el dinero adeudado."
      }
    ]
  },
  {
    id: 'derecho-previsional',
    title: 'Derecho Previsional',
    shortDesc: 'Gestión y litigio ante ANSES para asegurar que reciba el beneficio jubilatorio o pensión que le corresponde por ley.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    details: [
      {
        title: "Jubilaciones con y sin aportes",
        definition: "Beneficio económico por alcanzar la edad requerida. Puede darse teniendo los 30 años de aportes o ingresando a una moratoria para 'comprar' los años faltantes.",
        howWeHelp: "Realizamos un cálculo minucioso en SICAM, aplicamos la moratoria más conveniente y llevamos adelante el expediente en ANSES hasta que cobre su primer haber."
      },
      {
        title: "Pensiones por Fallecimiento",
        definition: "Prestación económica otorgada al cónyuge, conviviente o hijos menores/discapacitados tras la muerte de un trabajador en actividad o un jubilado.",
        howWeHelp: "Reunimos la prueba necesaria (especialmente en casos de concubinato no registrado), sorteamos las trabas burocráticas y logramos el alta del beneficio rápidamente."
      },
      {
        title: "Jubilación por Invalidez (RTI)",
        definition: "Retiro Transitorio por Invalidez: prestación para trabajadores que sufren una incapacidad física o intelectual del 66% o más que les impide trabajar.",
        howWeHelp: "Auditamos la historia clínica con médicos legistas, lo preparamos para la Comisión Médica y apelamos judicialmente si le otorgan un porcentaje menor al real."
      },
      {
        title: "Reajuste de Haberes",
        definition: "Demanda judicial contra el Estado cuando el monto de la jubilación está mal liquidado o perdió contra la inflación por falta de actualización histórica.",
        howWeHelp: "Efectuamos el cálculo actuarial demostrando la pérdida de poder adquisitivo, iniciamos el juicio federal y ejecutamos la sentencia para actualizar su cobro."
      }
    ]
  }
];