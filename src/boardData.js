export const boardCards = {
  emprendimiento: [
    {
      label: 'Identidad y FODA', title: 'Idea de negocio y perfil estratégico', reference: 'APE 01',
      text: 'MySubs organiza suscripciones, fechas de renovación y gasto mensual. El 65,2 % del sondeo había olvidado cancelar una suscripción alguna vez.',
      tiles: [['Fortalezas', 'Centralización y alertas preventivas'], ['Oportunidades', 'Más servicios por suscripción y demanda de control del gasto']],
      note: 'Visión a cinco años', action: 'Ver matriz FODA', page: 9,
    },
    {
      label: 'Business Model Canvas', title: 'Modelo de negocio y ventaja competitiva', reference: 'Freemium',
      text: 'Usuarios de 18 a 40 años en Ambato. La propuesta combina registro simple, calendario de renovaciones y alertas.',
      columns: ['Plataforma', 'Tarifa mensual', 'Diferencial'],
      rows: [['MySubs Smart', 'Gratis / USD 2,99', 'Registro manual y alertas'], ['Rocket Money', 'USD 7-14', 'Cancelación asistida'], ['PocketGuard', 'USD 12,99', 'Presupuesto personal']],
      note: 'Plan anual propuesto · USD 24,99', action: 'Ver taller de mercado', page: 11,
    },
    {
      label: 'Sondeo · 23 participantes', title: 'Validación de mercado en Ambato', reference: 'Google Forms',
      bars: [['Prefiere pagar USD 1 a USD 4 al mes', 73.9], ['Olvidó cancelar alguna suscripción', 65.2], ['Prioriza recordatorios antes del cobro', 60.9], ['No lleva control de suscripciones', 47.8]],
      note: 'Interés promedio · 3,52 de 5', action: 'Ver resultados del sondeo', page: 16,
    },
    {
      label: 'Estudio económico', title: 'Resultados económicos y viabilidad', reference: 'Proyección',
      tiles: [['Inversión inicial', 'USD 1.900'], ['Ingresos mensuales', 'USD 1.200'], ['Costo mensual total', 'USD 878'], ['Resultado mensual estimado', '+USD 322']],
      note: 'Recuperación simple · 5,9 meses', action: 'Ver desglose financiero', page: 13,
    },
  ],
  tributos: [
    {
      label: 'RUC y catastro SRI', title: 'RUC simulado y cinco empresas', reference: '1899999999001',
      text: 'Ficha académica de MySubs. La actividad principal es programación informática. Los códigos complementarios contemplan servicios de aplicaciones y adaptación de software.',
      rows: [['SoftwareOne Ecuador', 'G474112'], ['IBM del Ecuador', 'J6202.10'], ['Huawei Technologies', 'G4652.02'], ['Corporación Favorita', 'G4711.01'], ['Holcim Ecuador', 'C2394.01']],
      note: 'CIIU principal · J62010101', action: 'Ver catastro comparativo', page: 15,
    },
    {
      label: 'Caso INDUMETAL S.A.', title: 'Documentos comerciales y tributarios',
      rows: [['Compra de láminas', 'USD 2.100 + USD 315 IVA'], ['Venta de estanterías', 'USD 720 + USD 108 IVA'], ['Nota de crédito por devolución', '−USD 207'], ['Nota de débito por transporte', '+USD 34,50']],
      note: 'Retención didáctica · USD 21', action: 'Ver caso y comprobantes', page: 19,
    },
    {
      label: 'Facturador SRI e IVA', title: 'Facturación electrónica y declaración', reference: 'Formulario de IVA',
      text: 'La factura simulada muestra USD 2.000 de base y USD 300 de IVA. La declaración es otro ejercicio del anexo.',
      tiles: [['Total de la factura', 'USD 2.300'], ['Casilla 699', 'USD 0,00'], ['Crédito para el próximo mes', 'USD 832,50']],
      note: 'Resultados de simulación', action: 'Ver declaración de IVA', page: 38,
    },
    {
      label: 'SENADI y comercio exterior', title: 'Marca mixta y cinco grupos de importación',
      text: 'La solicitud simulada usa MySubs Smart y clase 42 de Niza. La infografía compara importaciones de Ecuador en 2024.',
      rows: [['Teléfonos y equipos de datos', '43,6 %'], ['Computadoras y unidades', '24,4 %'], ['Monitores y pantallas', '12,0 %'], ['Cables y fibra óptica', '11,2 %'], ['Impresoras', '8,8 %']],
      note: 'Total de los cinco grupos · USD 1.433,7 millones CIF', action: 'Ver infografía', page: 48,
    },
  ],
  nomina: [
    {
      label: 'Matriz de contratación', title: 'Auditoría de siete casos de contratación',
      rows: [['Guardaparque ocasional', 'USD 733'], ['Encargo de gerencia', 'USD 2.034'], ['Reclasificación administrativa', 'USD 733 → 1.676'], ['Contrato de contabilidad', 'Expediente parcial'], ['Docente ocasional', 'USD 2.000'], ['Dos casos adicionales', 'Casos 6 y 7']],
      note: 'Contratos y acciones de personal', action: 'Inspeccionar los siete casos', page: 12,
    },
    {
      label: 'Control de legalidad', title: 'Detección de cláusulas problemáticas',
      tiles: [['Novandes', 'Jornada, afiliación y vacaciones'], ['Municipio Valle Verde', 'Disponibilidad y vacaciones'], ['Universidad pública', 'Carga docente y remuneración']],
      note: 'Tres casos del taller', action: 'Ver matriz de cláusulas', page: 8,
    },
    {
      label: 'Nómina y beneficios', title: 'Remuneraciones, horas extras y rol PYME',
      text: 'La proyección de MySubs presupuesta el equipo de trabajo. La matriz laboral revisa jornada y prestaciones, y la hoja con horas extras y roles queda por adjuntar.',
      rows: [['Desarrollo de software', 'USD 300'], ['Soporte y atención al cliente', 'USD 200'], ['Gestión administrativa', 'USD 200']],
      note: 'Talento humano proyectado · USD 700 al mes', action: 'Ver presupuesto del equipo', page: 13, origin: 'emprendimiento',
    },
    {
      label: 'Pitch · Derechos laborales', title: 'Despido ineficaz y maternidad', reference: 'Referencia de la pizarra',
      text: 'La pizarra vincula el pitch con el caso Plasticaucho y el análisis procesal de la citación. El video del pitch está enlazado en la actividad.',
      note: 'Actividad registrada en el aula', action: 'Ver actividad',
    },
  ],
  liquidacion: [
    { label: 'Actividad grupal', title: '¿Qué me corresponde al terminar la relación laboral?', text: 'La guía revisa remuneración pendiente, beneficios e indemnizaciones según el caso.', action: 'Ver guía', page: 1 },
    { label: 'Matriz de casos', title: 'Formas de terminación laboral', text: 'La práctica de contratación compara vencimiento, cese y terminación anticipada.', action: 'Ver comparación', page: 15, origin: 'nomina' },
    { label: 'Laboral Hack', title: 'Gincana de legislación laboral', text: 'Actividad de repaso registrada en el aula. Queda por adjuntar la resolución.', action: 'Ver actividad' },
    { label: 'Calculadora del Ministerio del Trabajo', title: 'Cálculo de liquidaciones', text: 'La práctica pide seleccionar los rubros del caso y justificar los valores. Quedan por adjuntar las simulaciones resueltas.', action: 'Ver guía de cálculo', page: 1 },
  ],
};
