export default {
  global: {
    Name:
      'Análisis de viabilidad, eficiencia y cuantificación de impactos en procesos energéticos',
    Description:
      'Este componente formativo aborda el análisis de viabilidad, eficiencia y cuantificación de impactos en procesos energéticos, proporcionando a los aprendices las bases necesarias para evaluar la factibilidad técnica y económica de proyectos, identificar el nivel de aprovechamiento de los recursos y medir los efectos ambientales, sociales y económicos asociados. Su propósito es desarrollar competencias que permitan tomar decisiones informadas y promover prácticas energéticas más sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos y diagnóstico de la eficiencia energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Análisis de viabilidad económica de tecnologías eficientes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cuantificación de impactos y reducción de GEI',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principios y tipologías de energías renovables',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Evaluación crítica del ciclo de vida en la generación renovable',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Justificación de estrategias de economía circular para componentes de generación renovable',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de viabilidad económica de tecnologías eficientes',
      referencia:
        'Finnse (2019, 27 de junio). TIR o VPN ¿Cuál es mejor para tomar decisiones de inversión?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ezcniOjP-pI',
    },
    {
      tema: 'Cuantificación de impactos y reducción de GEI',
      referencia:
        'Canal Conuee (2018, 28 de noviembre). Webinar Metodología para la cuantificación de ahorros de energía.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6JyQsU6MQr4',
    },
    {
      tema: 'Evaluación crítica del ciclo de vida en la generación renovable',
      referencia:
        'EcologíaVerde (2023, 16 de julio). 5 TIPOS de ENERGÍAS RENOVABLES y Cómo Funcionan.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E4ZoFhVPqwY',
    },
  ],
  glosario: [
    {
      termino: 'Biocapacidad',
      significado:
        'capacidad de los ecosistemas para regenerar recursos naturales y absorber los residuos generados por las actividades humanas.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'alteración del clima global atribuida principalmente a las emisiones de gases de efecto invernadero provenientes de actividades humanas.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'conjunto de etapas de un producto o servicio desde la extracción de la materia prima hasta su disposición final.',
    },
    {
      termino: 'Contaminación',
      significado:
        'presencia de sustancias nocivas en el aire, agua o suelo que generan efectos negativos en los ecosistemas y la salud humana.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'proceso de crecimiento que integra aspectos económicos, sociales y ambientales para lograr un progreso equitativo y duradero.',
    },
    {
      termino: 'Disposición final',
      significado:
        'etapa en la que los residuos son tratados y gestionados al finalizar su vida útil.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo productivo que busca eliminar residuos, mantener los materiales en uso y regenerar los sistemas naturales.',
    },
    {
      termino: 'Economía lineal',
      significado:
        'modelo tradicional basado en extraer, producir, consumir y desechar, generando un flujo continuo de residuos.',
    },
    {
      termino: 'Emisiones de GEI',
      significado:
        'liberación de gases de efecto invernadero, como CO₂, que contribuyen al calentamiento global.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'uso óptimo de la energía para realizar una actividad con menor consumo e impacto ambiental.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'indicador que mide la demanda humana de recursos naturales frente a la capacidad del planeta para regenerarlos.',
    },
    {
      termino: 'Impactos ambientales',
      significado:
        'consecuencias de las actividades humanas sobre el medio ambiente, como contaminación, pérdida de biodiversidad y emisiones de GEI.',
    },
    {
      termino: 'Mitigación',
      significado:
        'acciones destinadas a reducir o prevenir los impactos ambientales, especialmente las emisiones de GEI.',
    },
    {
      termino: 'Recursos naturales',
      significado:
        'elementos provenientes de la naturaleza que se utilizan para producir bienes y servicios, como agua, suelo, energía y minerales.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Equilibrio entre lo ambiental, social y económico para satisfacer necesidades presentes sin comprometer las de futuras generaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión Mundial sobre Medio Ambiente y Desarrollo. (1987). <i>Nuestro futuro común (Informe Brundtland)</i>',
    },

    {
      referencia:
        '<i>Global Footprint Network.</i> (2024). <i>Huella Ecológica: Conceptos, Medición y Aplicaciones</i>',
    },

    {
      referencia:
        'Ellen MacArthur Foundation. (2017). <i>Introducción a la economía circular</i>',
    },

    {
      referencia:
        'Agencia Internacional de la Energía (IEA). (2023). <i>World Energy Outlook 2023. IEA Publications</i>',
    },

    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS) de Colombia. (2019). <i>Guía metodológica para la evaluación de impactos ambientales.</i>',
    },

    {
      referencia:
        'UNEP, GRID-Arendal. (2018). <i>Energy and the Sustainable Development Goals: An Integrated Approach.</i>',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '-- ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
