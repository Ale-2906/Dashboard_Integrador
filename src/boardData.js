export const boardCards = {
  emprendimiento: [
    {
      label: 'Identidad y FODA', title: 'Idea de negocio y perfil estratégico', reference: 'APE 01',
      text: 'La idea salió de algo que pasa con frecuencia: se renueva un servicio que ya no usamos y nos enteramos al ver el cobro. Por eso pensamos MySubs como un registro de suscripciones que avise antes de cada renovación.',
      tiles: [['Fortalezas', 'Centralización y alertas preventivas'], ['Oportunidades', 'Más servicios por suscripción y demanda de control del gasto']],
      note: 'Visión a cinco años', action: 'Ver matriz FODA', page: 9,
    },
    {
      label: 'Business Model Canvas', title: 'Modelo de negocio y ventaja competitiva', reference: 'Freemium',
      text: 'Pensamos primero en usuarios de 18 a 40 años de Ambato. Al comparar otras aplicaciones, vimos que MySubs podía empezar con tres funciones sencillas: anotar las suscripciones, ver las fechas en un calendario y recibir avisos.',
      columns: ['Plataforma', 'Tarifa mensual', 'Diferencial'],
      rows: [['MySubs Smart', 'Gratis / USD 2,99', 'Registro manual y alertas'], ['Rocket Money', 'USD 7-14', 'Cancelación asistida'], ['PocketGuard', 'USD 12,99', 'Presupuesto personal']],
      note: 'Plan anual propuesto · USD 24,99', action: 'Ver taller de mercado', page: 11,
    },
    {
      label: 'Sondeo · 23 participantes', title: 'Validación de mercado en Ambato',
      text: 'Preguntamos a 23 personas cómo llevaban el control de sus suscripciones. Las respuestas mostraron que varias habían olvidado cancelar alguna y que los recordatorios servían para resolver un problema que ya tenían.', reference: 'Google Forms',
      bars: [['Prefiere pagar USD 1 a USD 4 al mes', 73.9], ['Olvidó cancelar alguna suscripción', 65.2], ['Prioriza recordatorios antes del cobro', 60.9], ['No lleva control de suscripciones', 47.8]],
      note: 'Interés promedio · 3,52 de 5', action: 'Ver resultados del sondeo', page: 16,
    },
    {
      label: 'Estudio económico', title: 'Resultados económicos y viabilidad',
      text: 'Para ponerle números al plan, anotamos cuánto costaría arrancar y cuánto saldría operar cada mes. El resultado de la tarjeta depende del escenario de 400 clientes a USD 3 mensuales.', reference: 'Proyección',
      tiles: [['Inversión inicial', 'USD 1.900'], ['Ingresos mensuales', 'USD 1.200'], ['Costo mensual total', 'USD 878'], ['Resultado mensual estimado', '+USD 322']],
      note: 'Recuperación simple · 5,9 meses', action: 'Ver desglose financiero', page: 13,
    },
  ],
  tributos: [
    {
      label: 'RUC y catastro SRI', title: 'RUC simulado y cinco empresas', reference: '1899999999001',
      text: 'En el RUC simulado de MySubs dejamos la programación como actividad principal. La comparación con cinco empresas nos ayudó a distinguirla de los servicios de aplicaciones y la adaptación de software.',
      rows: [['SoftwareOne Ecuador', 'G474112'], ['IBM del Ecuador', 'J6202.10'], ['Huawei Technologies', 'G4652.02'], ['Corporación Favorita', 'G4711.01'], ['Holcim Ecuador', 'C2394.01']],
      note: 'CIIU principal · J62010101', action: 'Ver catastro comparativo', page: 15,
    },
    {
      label: 'Caso INDUMETAL S.A.', title: 'Documentos comerciales y tributarios',
      text: 'En INDUMETAL practicamos cómo se respalda una compra, una venta y un traslado de mercadería. También vimos cómo cambia el total de una factura cuando hay una devolución o un cobro adicional.',
      rows: [['Compra de láminas', 'USD 2.100 + USD 315 IVA'], ['Venta de estanterías', 'USD 720 + USD 108 IVA'], ['Nota de crédito por devolución', '−USD 207'], ['Nota de débito por transporte', '+USD 34,50']],
      note: 'Retención didáctica · USD 21', action: 'Ver caso y comprobantes', page: 19,
    },
    {
      label: 'Facturador SRI e IVA', title: 'Facturación electrónica y declaración', reference: 'Formulario de IVA',
      text: 'En la factura de práctica, USD 2.000 de base y USD 300 de IVA dieron un total de USD 2.300. En el ejercicio de declaración revisamos por separado lo que quedaba por pagar y lo que pasaba como crédito al siguiente mes.',
      tiles: [['Total de la factura', 'USD 2.300'], ['Casilla 699', 'USD 0,00'], ['Crédito para el próximo mes', 'USD 832,50']],
      note: 'Resultados de simulación', action: 'Ver declaración de IVA', page: 38,
    },
    {
      label: 'SENADI y comercio exterior', title: 'Marca mixta y cinco grupos de importación',
      text: 'Buscamos nombres parecidos a MySubs Smart antes de simular la solicitud de marca. En otro taller comparamos cinco grupos de importaciones tecnológicas y vimos que los teléfonos y equipos de datos tenían la mayor participación.',
      rows: [['Teléfonos y equipos de datos', '43,6 %'], ['Computadoras y unidades', '24,4 %'], ['Monitores y pantallas', '12,0 %'], ['Cables y fibra óptica', '11,2 %'], ['Impresoras', '8,8 %']],
      note: 'Total de los cinco grupos · USD 1.433,7 millones CIF', action: 'Ver infografía', page: 48,
    },
  ],
  nomina: [
    {
      label: 'Matriz de contratación', title: 'Auditoría de siete casos de contratación',
      text: 'Pusimos siete casos en una matriz para comparar el sueldo y las condiciones que constaban en cada documento. El ejemplo de reclasificación muestra un cambio de remuneración sin que cambie el vínculo de trabajo.',
      rows: [['Guardaparque ocasional', 'USD 733'], ['Encargo de gerencia', 'USD 2.034'], ['Reclasificación administrativa', 'USD 733 → 1.676'], ['Contrato de contabilidad', 'Expediente parcial'], ['Docente ocasional', 'USD 2.000'], ['Dos casos adicionales', 'Casos 6 y 7']],
      note: 'Contratos y acciones de personal', action: 'Inspeccionar los siete casos', page: 12,
    },
    {
      label: 'Control de legalidad', title: 'Detección de cláusulas problemáticas',
      text: 'Leímos las cláusulas de tres casos y marcamos los puntos que nos llamaron la atención. Entre ellos estaban los horarios, los días de vacaciones y las condiciones de afiliación o compensación.',
      tiles: [['Novandes', 'Jornada, afiliación y vacaciones'], ['Municipio Valle Verde', 'Disponibilidad y vacaciones'], ['Universidad pública', 'Carga docente y remuneración']],
      note: 'Tres casos del taller', action: 'Ver matriz de cláusulas', page: 8,
    },
    {
      label: 'Nómina y beneficios', title: 'Remuneraciones, horas extras y rol PYME',
      text: 'El plan de MySubs distribuye USD 700 al mes entre desarrollo, soporte y administración. Esa cifra viene del presupuesto del proyecto. El detalle de horas extras y los roles de pago queda por adjuntar.',
      rows: [['Desarrollo de software', 'USD 300'], ['Soporte y atención al cliente', 'USD 200'], ['Gestión administrativa', 'USD 200']],
      note: 'Talento humano proyectado · USD 700 al mes', action: 'Ver presupuesto del equipo', page: 13, origin: 'emprendimiento',
    },
    {
      label: 'Pitch · Derechos laborales', title: 'Despido ineficaz y maternidad', reference: 'Referencia de la pizarra',
      text: 'Presentamos el caso Plasticaucho y contamos qué se discutía sobre el despido y la protección por maternidad. En el video explicamos cómo el error en la citación afectó el trámite.',
      note: 'Actividad registrada en el aula', action: 'Ver actividad',
    },
  ],
  liquidacion: [
    { label: 'Actividad grupal', title: '¿Qué me corresponde al terminar la relación laboral?', text: 'El ejercicio parte de lo que pasó al terminar el trabajo. Según el caso, la guía pide separar el sueldo pendiente, los beneficios y la indemnización que se deba revisar.', action: 'Ver guía', page: 1 },
    { label: 'Matriz de casos', title: 'Formas de terminación laboral', text: 'En los contratos comparamos qué ocurre cuando vence el plazo, cuándo hay un cese y cuándo se termina antes de lo previsto. La comparación ayuda a ubicar la causal de cada caso.', action: 'Ver comparación', page: 15, origin: 'nomina' },
    { label: 'Laboral Hack', title: 'Gincana de legislación laboral', text: 'Repasamos las formas de terminación con un Kahoot. En una pregunta, Daniela y su empleador acordaban libremente la salida y teníamos que distinguir ese caso de un despido.', action: 'Ver actividad' },
    { label: 'Calculadora del Ministerio del Trabajo', title: 'Cálculo de liquidaciones', text: 'Para usar la calculadora, primero hay que identificar cómo terminó el vínculo y cuáles son los rubros del caso. La guía explica ese orden y las simulaciones resueltas quedan por adjuntar.', action: 'Ver guía de cálculo', page: 1 },
  ],
};
