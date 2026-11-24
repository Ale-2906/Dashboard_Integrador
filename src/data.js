export const files = {
  emprendimiento:{title:'APE 01 · Plan de negocio de MySubs',file:'emprendimiento.pdf',detail:'Plan empresarial, encuesta y estudio económico'},
  tributos:{title:'PEA 02 · Obligaciones tributarias de una PYME',file:'tributos.pdf',detail:'RUC, CIIU, comprobantes y declaración simulada'},
  nomina:{title:'PAE 03 · Contratación laboral, deberes y derechos',file:'contratacion.pdf',detail:'Matriz de jornada, remuneración y beneficios sociales'},
  liquidacion:{title:'Guía · Despidos y liquidaciones laborales',file:'liquidacion.pdf',detail:'Terminación laboral y rubros de liquidación'}
};
export const modules = {
  emprendimiento:{name:'Emprendimiento',description:'Idea de negocio, Canvas y resultados económicos de MySubs.',intro:'MySubs centraliza las suscripciones y envía recordatorios previos al cobro. El APE 01 reúne la propuesta de valor, el perfil estratégico, el sondeo, el plan operativo y el estudio económico.',source:'Estudio económico · APE 01, páginas 13 y 14',metrics:[['USD 1.200','Ingresos mensuales estimados'],['USD 878','Costo mensual total'],['USD 322','Resultado mensual estimado'],['23','Participantes del sondeo']],topics:[['Idea y modelo de negocio','Control de fechas de cobro y gastos recurrentes. El informe incluye el trabajo del Business Model Canvas.'],['Plan empresarial','El perfil estratégico incluye misión, visión y FODA. La propuesta comercial contempla USD 3 mensuales y 400 clientes estimados.'],['Sondeo de mercado','El 65,2 % olvidó cancelar una suscripción y el 73,9 % prefirió pagar entre USD 1 y USD 4 al mes.']],docs:[['Idea, Canvas y plan empresarial',5],['Estudio económico y proyección de ventas',13],['Estudio de mercado',15]]},
  tributos:{name:'Obligaciones tributarias',description:'Formalización, RUC, IVA y comprobantes del taller.',intro:'El PEA 02 documenta la formalización de una PYME tecnológica y conserva las simulaciones trabajadas en clase.',source:'Declaración simulada · PEA 02, página 38',metrics:[['USD 0,00','Total impuesto a pagar por percepción y retenciones']],topics:[['RUC y actividad económica','El taller compara registros y documenta actividades CIIU, entre ellas J63110301 para servicios de aplicaciones.'],['IVA y documentos','El expediente incluye capturas de factura, nota de crédito, guía de remisión y formulario de IVA. Los valores corresponden al ejercicio de clase.']],docs:[['Taller de RUC y formalización',11],['Formulario de IVA · resultado de la simulación',38]]},
  nomina:{name:'Remuneraciones y nómina',description:'Jornada, remuneración y beneficios en los contratos analizados.',intro:'La matriz del PAE 03 compara las condiciones de trabajo y remuneración de los contratos analizados durante el semestre.',topics:[['Salarios y jornada','Consulta la matriz de condiciones económicas y de trabajo con las remuneraciones y jornadas registradas en cada caso.'],['Horas extras y beneficios sociales','El informe analiza jornada, derechos y beneficios. El cálculo de horas extras y el rol de pago requieren la hoja desarrollada en clase.']],docs:[['Matriz de condiciones económicas y de trabajo',13],['Derechos y obligaciones',14]],pending:'Por adjuntar: hoja de nómina con salarios, cálculo de horas extras y beneficios, y roles de pago.'},
  liquidacion:{name:'Liquidación laboral',description:'Desahucio, despido intempestivo y documentos de cierre.',intro:'La guía de despidos y liquidaciones reúne las actividades sobre terminación de la relación laboral. La matriz del PAE 03 aporta el análisis de los contratos.',topics:[['Formas de terminación','La guía distingue desahucio y despido intempestivo. La matriz comparativa documenta condiciones de terminación en los casos revisados.'],['Liquidaciones y paz y salvo','La guía identifica remuneraciones pendientes, beneficios e indemnizaciones como rubros de análisis. La hoja resuelta y el respaldo del paz y salvo se consultarán al incorporar los archivos del grupo.']],docs:[['Guía de despidos y liquidaciones',1],['Comparación de contratación y terminación',15,'nomina']],pending:'Por adjuntar: liquidaciones resueltas, automatización original del paz y salvo y evidencias documentales generadas en clase.'}
};

export const activities = {
  emprendimiento: [
    { title: 'Tarea 01 · Unidad 01', body: 'Comparamos tres oportunidades de negocio y elegimos la gestión de suscripciones. Definimos el problema, el cliente y la solución: registrar renovaciones, mostrar el gasto mensual y avisar antes de cada cobro.', page: 5 },
    { title: 'Tarea 02 · Taller Modelo Canvas', body: 'El informe incorpora el Business Model Canvas. La propuesta combina alertas y control del gasto para usuarios de servicios digitales con un canal móvil y web y un modelo freemium, desarrollado en el taller de mercado.', page: 2 },
    { title: 'Tarea 03 · Taller Perfil Estratégico', body: 'Definimos la misión y la visión. El FODA identificó la centralización como fortaleza, el bajo reconocimiento inicial como debilidad, el crecimiento de las suscripciones como oportunidad y la competencia como amenaza. Propusimos difundir la app y diferenciarla con alertas.', page: 7 },
    { title: 'Tarea 04 · Mercado y operación del emprendimiento', body: 'Delimitamos un público de 18 a 40 años en Ambato y comparamos MySubs con Rocket Money y PocketGuard. Diseñamos el flujo desde la creación de la cuenta hasta el soporte. En el sondeo de 23 personas, el 60,9 % priorizó los recordatorios antes del cobro.', page: 11, extra: ['Resultados del sondeo', 16] },
    { title: 'Tarea 05 · Viabilidad financiera del plan de negocios', body: 'Estimamos USD 1.900 de inversión inicial. Con 400 clientes a USD 3 al mes, la proyección arroja USD 1.200 de ingresos, USD 878 de costos y USD 322 de resultado mensual, con una recuperación simple estimada de 5,9 meses.', page: 13 },
  ],
  tributos: [
    { title: 'Tarea 06 · Simulación del RUC y formalización', body: 'Llenamos la ficha de RUC simulado de MySubs y comparamos la actividad económica de cinco empresas. Seleccionamos J62010101 para programación, J63110301 para servicios de aplicaciones y J620102 para adaptación de software. También identificamos los trámites y comprobantes a considerar al formalizar el negocio.', page: 11, evidenceLabel: 'Ver ficha de RUC', extra: ['Ver selección de códigos CIIU', 12] },
    { title: 'Tarea 07 · Factura en el simulador', body: 'En el Facturador SRI ingresamos una operación de MySubs con 500 unidades a USD 4. El simulador muestra USD 2.000 de subtotal, USD 300 de IVA y USD 2.300 de total. El anexo conserva el detalle de la operación y la pantalla de totales.', page: 40, evidenceLabel: 'Ver detalle de la factura', extra: ['Ver totales de la factura', 41] },
    { title: 'Tarea 08 · Obligaciones tributarias e IVA', body: 'En el caso INDUMETAL completamos comprobantes para seis operaciones, entre ellas una retención didáctica de USD 21 y una guía para el traslado de 50 láminas. La devolución de una estantería redujo el total en USD 207 mediante nota de crédito, y un cargo de transporte lo aumentó en USD 34,50 mediante nota de débito.', page: 19, evidenceLabel: 'Ver caso INDUMETAL', extra: ['Ver nota de crédito', 24] },
    { title: 'Tarea 09 · Obligaciones tributarias e IVA, parte dos', body: 'En la segunda parte revisamos cómo las ventas, adquisiciones y ajustes de los comprobantes se reflejan en la liquidación del IVA. El caso simulado registró USD 0,00 en la casilla 699 y USD 832,50 de crédito por adquisiciones e importaciones para el mes siguiente.', page: 35, evidenceLabel: 'Ver formulario de IVA', extra: ['Resultado de la declaración simulada', 38] },
    { title: 'Tarea 10 · Registro de marca y gamificación', body: 'Buscamos marcas similares, entre ellas dos gestores llamados MySubs y TrackMySubs. Propusimos el nombre MySubs Smart, justificamos la clase 42 de Niza para el software en línea y completamos una solicitud simulada de marca mixta. El anexo documenta el registro simulado. El anexo incluye el enlace al crucigrama de propiedad intelectual y marca.', page: 49, evidenceLabel: 'Ver búsqueda de marcas', extra: ['Ver solicitud simulada', 50] },
    { title: 'Tarea 11 · Importación de tecnología en Ecuador', body: 'Elaboramos una infografía con un cuadro comparativo de cinco productos tecnológicos importados a Ecuador en 2024. El cuadro reporta USD 1.433,7 millones en valor CIF para esas categorías. Los teléfonos y equipos de datos lideran con el 43,6 %, seguidos de las computadoras y unidades con el 24,4 %. También se identifican países proveedores y partidas arancelarias.', page: 48, evidenceLabel: 'Ver infografía del anexo' },
    { title: 'Tarea 12 · Aplicación práctica de contratación de personal', body: 'La actividad del aula cierra el bloque y enlaza con el análisis laboral. Como respaldo relacionado, la matriz del módulo de nómina aplica la selección de modalidad, jornada, remuneración y beneficios a una PYME como MySubs.', page: 15, origin: 'nomina', evidenceLabel: 'Ver análisis relacionado' },
  ],
  nomina: [
    { title: 'Modos de producción, datos del Ministerio del Trabajo y casos de contratos', body: 'La práctica compara cinco modos de producción y revisa tres casos de contrato. Se identificaron problemas en cláusulas de jornada, vacaciones y renuncia de compensaciones. El PDF contiene el cuadro y los casos analizados.', page: 6, extra: ['Casos de contratos', 8] },
    { title: 'Pitch · Caso real sobre derechos laborales', body: 'La actividad figura en el aula. La matriz de clase permite repasar criterios para evaluar un caso, como jornada, descansos y seguridad social. El anexo incluye el video del caso Plasticaucho.', page: 11, evidenceLabel: 'Ver anexo del pitch', extra: ['Ver matriz relacionada', 14] },
    { title: 'Contratación laboral, deberes y derechos', body: 'Comparamos siete contratos y acciones de personal bajo distintos regímenes. Registramos jornada, remuneración, beneficios y afiliación. En un caso, una reclasificación elevó la remuneración de USD 733 a USD 1.676 dentro del vínculo existente.', page: 12, extra: ['Matriz de jornada y remuneración', 13] },
  ],
  liquidacion: [
    { title: 'Actividad grupal · ¿Qué me corresponde al terminar la relación laboral?', body: 'La guía propone identificar cómo termina la relación laboral y revisar qué rubros corresponden al caso: remuneración pendiente, beneficios e indemnizaciones. La resolución del grupo queda por adjuntar.', page: 1, evidenceLabel: 'Ver guía de la práctica' },
    { title: 'Matriz de análisis de casos de terminación laboral', body: 'La actividad figura en el aula. Como respaldo relacionado, la práctica de contratación compara causales de cese, vencimiento y terminación anticipada según el vínculo. La matriz específica de terminación queda por adjuntar.', page: 15, origin: 'nomina', evidenceLabel: 'Ver comparación relacionada' },
    { title: 'Laboral Hack · Gincana digital de legislación laboral', body: 'La gincana figura en el aula virtual como actividad de repaso. En los archivos del proyecto queda por adjuntar su consigna o resolución.' },
    { title: 'Cálculo de liquidaciones con la calculadora del Ministerio del Trabajo', body: 'El aula identifica la herramienta utilizada. La guía explica el análisis previo: distinguir la forma de terminación, seleccionar los rubros y justificar los valores. Las simulaciones resueltas quedan por adjuntar.', page: 1, evidenceLabel: 'Ver guía de cálculo' },
  ],
};

export const mySubsAppUrl = 'https://mysubs-smart.onrender.com/';

export const activityResources = {
  emprendimiento: {
    3: [['Abrir encuesta de MySubs', 'https://forms.gle/tG67C8grANTurYda9']],
  },
  tributos: {
    3: [['Guía del SRI para llenar el formulario de IVA', 'https://www.sri.gob.ec/o/sri-portlet-biblioteca-alfresco-internet/descargar/e084fae5-9677-450c-8161-21e7c3a9f65b/Gu%c3%ada%20para%20el%20llenado%20del%20Formulario%20Impuesto%20al%20Valor%20Agregado%20IVA.PDF']],
    4: [
      ['Crucigrama de propiedad intelectual y marca', 'https://es.educaplay.com/recursos-educativos/30606701-crucigrama_propiedad_intelectual_y_marca.html'],
      ['Manual de casilleros virtuales del SENADI', 'https://registro.propiedadintelectual.gob.ec/casilleros/media/files/manual.pdf'],
    ],
    5: [
      ['UN Comtrade', 'https://comtradeplus.un.org/'],
      ['Importaciones de Ecuador · Banco Mundial', 'https://wits.worldbank.org/CountryProfile/en/Country/ECU/Year/LTST/TradeFlow/Import'],
      ['Sector externo · Banco Central del Ecuador', 'https://www.bce.fin.ec/informacioneconomica/sector-externo'],
    ],
  },
  nomina: {
    1: [
      ['Ver pitch de despido en HeyGen', 'https://app.heygen.com/videos/pitch-plasticaucho-riesgo-laboral-y-error-procesal-54219a906ae8dc78e5535ac06540916d'],
    ],
  },
};

export const moduleResources = {
  liquidacion: [
    ['Marketing para emprender · eLibro UTA', 'https://0x102pkhz-y-https-elibro-net.itmsp.museknowledge.com/es/ereader/uta/127104'],
    ['El proceso de emprender · eLibro UTA', 'https://0x102pc9x-y-https-elibro-net.itmsp.museknowledge.com/es/ereader/uta/289231'],
    ['Tu business plan ¡en un pim pam! · eLibro UTA', 'https://0x1025w0m-y-https-elibro-net.itmsp.museknowledge.com/es/lc/uta/titulos/58439'],
  ],
};
