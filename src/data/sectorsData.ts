import { SectorItem } from '../types';

import readingImg from '../assets/images/reading_sector_classroom_1790541497661.jpg';
import artImg from '../assets/images/art_creativity_sector_1790541507159.jpg';
import mathScienceImg from '../assets/images/math_science_sector_1790541516470.jpg';
import techSocialImg from '../assets/images/technology_personal_social_1790541526157.jpg';

export const SECTORS: SectorItem[] = [
  {
    id: 'lectura',
    name: 'Lectura',
    shortDesc: 'Libros, revistas y materiales de lectura.',
    pedagogicalObjective:
      'Fomentar el hábito lector, la animación a la lectura autónoma, la comprensión inferencial y el desarrollo del lenguaje oral y expresivo en un entorno de calma y confort.',
    competencies: [
      'Se comunica oralmente en su lengua materna',
      'Lee diversos tipos de textos escritos',
      'Desarrollo de la concentración y empatía narrativa'
    ],
    materials: [
      'Estantería baja accesible con libros ilustrados y álbumes',
      'Alfombra sensorial suave verde lavable',
      'Cojines ergonómicos de distintas texturas y colores',
      'Revistas infantiles, cancioneros y títeres de dedos',
      'Planta natural para ambientación biofílica'
    ],
    ergonomics:
      'Ubicado en esquina norte junto a ventana, alejado de la circulación principal. Iluminación natural directa, aislamiento del ruido.',
    noiseLevel: 'silencioso',
    color: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500',
      text: 'text-emerald-700 dark:text-emerald-300',
      badgeBg: 'bg-emerald-600',
      iconColor: '#059669',
      gradient: 'from-emerald-500 to-teal-600'
    },
    iconName: 'BookOpen',
    image: readingImg,
    planCoordinates: {
      x: 6.5,
      y: 9,
      width: 17,
      height: 22
    }
  },
  {
    id: 'arte',
    name: 'Arte y creatividad',
    shortDesc: 'Materiales de arte y expresión creativa.',
    pedagogicalObjective:
      'Estimular la creatividad plástica, motricidad fina, expresión de emociones y experimentación con texturas, formas, pigmentos y volúmenes.',
    competencies: [
      'Crea proyectos desde los lenguajes artísticos',
      'Coordinación visomotriz fina y lateralidad',
      'Apreciación estética y cuidado de materiales'
    ],
    materials: [
      'Mesa de trabajo colectivo con bancos de colores a medida infantil',
      'Mueble organizador con bandejas para témperas, pinceles y arcilla',
      'Caballetes de pintura de doble cara lavables',
      'Tijeras de punta roma, pegamentos no tóxicos y papeles diversos',
      'Batas protectoras y papel reciclado'
    ],
    ergonomics:
      'Frente a ventana norte para máxima luz natural diurna; superficies y piso cerámico lavables para rápida limpieza.',
    noiseLevel: 'moderado',
    color: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-500',
      iconColor: '#d97706',
      gradient: 'from-amber-500 to-orange-500'
    },
    iconName: 'Palette',
    image: artImg,
    planCoordinates: {
      x: 25.5,
      y: 9,
      width: 16.5,
      height: 22
    }
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    shortDesc: 'Materiales para la exploración y el descubrimiento.',
    pedagogicalObjective:
      'Promover la curiosidad científica, la indagación mediante métodos empíricos, la observación de fenómenos naturales y el respeto ecológico.',
    competencies: [
      'Indaga mediante métodos científicos para construir conocimientos',
      'Explora y comprende el mundo físico y natural',
      'Registro de hipótesis, clasificación y experimentación'
    ],
    materials: [
      'Estante con microscopio escolar y lupas de mano',
      'Globo terráqueo físico e hidrográfico',
      'Muestrarios de hojas, semillas, rocas y conchas marinas',
      'Tubos de ensayo plásticos irrompibles y probetas medidoras',
      'Terrario didáctico y macetas con plantas vivas'
    ],
    ergonomics:
      'Zona intermedia norte con excelente ventilación natural; estanterías con reborde anticaídas para instrumental de laboratorio infantil.',
    noiseLevel: 'moderado',
    color: {
      bg: 'bg-teal-500/10',
      border: 'border-teal-500',
      text: 'text-teal-700 dark:text-teal-300',
      badgeBg: 'bg-teal-600',
      iconColor: '#0d9488',
      gradient: 'from-teal-500 to-cyan-600'
    },
    iconName: 'FlaskConical',
    image: mathScienceImg,
    planCoordinates: {
      x: 43.5,
      y: 9,
      width: 14,
      height: 21
    }
  },
  {
    id: 'matematica',
    name: 'Matemática',
    shortDesc: 'Materiales manipulativos y recursos numéricos.',
    pedagogicalObjective:
      'Facilitar la construcción del pensamiento lógico-matemático a través de la manipulación concreta: seriación, conteo, patrones, equivalencias y noción espacial.',
    competencies: [
      'Resuelve problemas de cantidad y equivalencia',
      'Resuelve problemas de forma, movimiento y localización',
      'Pensamiento deductivo y resolución de problemas cotidianos'
    ],
    materials: [
      'Estantería clasificadora con rótulos numéricos 1-2-3',
      'Ábacos verticales y horizontales de madera',
      'Regletas de Cuisenaire y bloques lógicos de Dienes',
      'Balanza de dos platos con pesas calibradas plásticas',
      'Geoplanos, tangrams y tarjetas de secuencias lógicas'
    ],
    ergonomics:
      'Adyacente a Ciencias y frente a ventana para estudio minucioso de detalles y mediciones con luz homogénea.',
    noiseLevel: 'moderado',
    color: {
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500',
      text: 'text-indigo-700 dark:text-indigo-300',
      badgeBg: 'bg-indigo-600',
      iconColor: '#4f46e5',
      gradient: 'from-indigo-500 to-purple-600'
    },
    iconName: 'Calculator',
    image: mathScienceImg,
    planCoordinates: {
      x: 59,
      y: 9,
      width: 14,
      height: 21
    }
  },
  {
    id: 'construccion',
    name: 'Construcción',
    shortDesc: 'Bloques y materiales de construcción.',
    pedagogicalObjective:
      'Estimular el razonamiento espacial tridimensional, la planificación colectiva, el equilibrio, la coordinación ojo-mano y la resolución colaborativa de retos.',
    competencies: [
      'Resuelve problemas de forma y equilibrio estructural',
      'Trabajo cooperativo y resolución de conflictos espaciales',
      'Creatividad arquitectónica y motricidad gruesa/fina'
    ],
    materials: [
      'Mueble bajo con compartimentos abiertos por tamaño de piezas',
      'Bloques de madera maciza de pino natural pulido (sin astillas)',
      'Bloques geométricos plásticos de encaje',
      'Figuras de personas, vehículos y señales viales a escala',
      'Tapete acolchado amortiguador de ruidos de impacto'
    ],
    ergonomics:
      'Ubicado en la esquina noreste con alfombra acolchada que absorbe el ruido del choque de piezas. Delimitado para no interferir con pasos.',
    noiseLevel: 'dinamico',
    color: {
      bg: 'bg-rose-500/10',
      border: 'border-rose-500',
      text: 'text-rose-700 dark:text-rose-300',
      badgeBg: 'bg-rose-600',
      iconColor: '#e11d48',
      gradient: 'from-rose-500 to-red-600'
    },
    iconName: 'Blocks',
    image: artImg,
    planCoordinates: {
      x: 74.5,
      y: 9,
      width: 18.5,
      height: 22
    }
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    shortDesc: 'Dispositivos y recursos digitales.',
    pedagogicalObjective:
      'Introducir la alfabetización digital, el pensamiento computacional básico, la indagación interactiva y el uso responsable de medios tecnológicos.',
    competencies: [
      'Se desenvuelve en entornos virtuales generados por las TIC',
      'Pensamiento algorítmico y resolución de retos interactivos',
      'Seguridad postural y ergonomía digital'
    ],
    materials: [
      'Mesa tecnológica lineal con pasacables de seguridad ocultos',
      '2 computadoras portátiles / tablets educativas con fundas antigolpes',
      'Auriculares infantiles con limitador de volumen a 85 dB',
      'Software de robótica infantil (ScratchJr, cuentos interactivos)',
      'Sillas ergonómicas regulables con soporte lumbar infantil'
    ],
    ergonomics:
      'Pared este para evitar reflejos solares directos en pantallas. Tomas eléctricas protegidas con tapas de seguridad infantil.',
    noiseLevel: 'moderado',
    color: {
      bg: 'bg-sky-500/10',
      border: 'border-sky-500',
      text: 'text-sky-700 dark:text-sky-300',
      badgeBg: 'bg-sky-600',
      iconColor: '#0284c7',
      gradient: 'from-sky-500 to-blue-600'
    },
    iconName: 'Monitor',
    image: techSocialImg,
    planCoordinates: {
      x: 78.5,
      y: 33,
      width: 15.5,
      height: 18
    }
  },
  {
    id: 'personal_social',
    name: 'Personal Social',
    shortDesc: 'Materiales relacionados con la comunidad, la familia y el entorno.',
    pedagogicalObjective:
      'Fortalecer la construcción de la identidad personal, el sentido de pertenencia familiar y cultural, el reconocimiento de emociones y la convivencia pacífica.',
    competencies: [
      'Construye su identidad personal y cultural',
      'Convive y participa democráticamente en la búsqueda del bien común',
      'Empatía, autoconocimiento y sentido de ciudadanía'
    ],
    materials: [
      'Estantería con álbumes familiares de los alumnos y árbol genealógico',
      'Disfrazario y títeres de miembros de la comunidad (médico, bombero, maestro)',
      'Globo terráqueo y mapa cultural de la región',
      'Espejo de cuerpo entero de seguridad inastillable para autoimagen',
      'Rincón de la calma y termómetro de las emociones'
    ],
    ergonomics:
      'Pared este inferior, conectado con la circulación y cercano al docente para acompañamiento afectivo continuo.',
    noiseLevel: 'moderado',
    color: {
      bg: 'bg-amber-600/10',
      border: 'border-amber-600',
      text: 'text-amber-800 dark:text-amber-300',
      badgeBg: 'bg-amber-600',
      iconColor: '#d97706',
      gradient: 'from-amber-600 to-yellow-600'
    },
    iconName: 'Globe',
    image: techSocialImg,
    planCoordinates: {
      x: 78.5,
      y: 53,
      width: 15.5,
      height: 22
    }
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca',
    shortDesc: 'Libros de consulta y lectura libre.',
    pedagogicalObjective:
      'Servir como repositorio central de saberes, enciclopedias infantiles temáticas, diccionarios ilustrados y archivo de producción escrita del aula.',
    competencies: [
      'Lee diversos tipos de textos en su lengua materna',
      'Búsqueda y organización de información bibliográfica',
      'Respeto y cuidado del patrimonio bibliográfico comunitario'
    ],
    materials: [
      'Librero vertical con protección antivuelco fijado al muro',
      'Enciclopedias temáticas (animales, espacio, cuerpo humano)',
      'Diccionarios escolares ilustrados y cancioneros poéticos',
      'Sistema de préstamo bibliotecario con fichas de colores',
      'Rincón para bitácoras y diarios de aula'
    ],
    ergonomics:
      'Pared oeste junto a la entrada, visible al ingresar y cerca del sector de lectura para fácil reubicación de ejemplares.',
    noiseLevel: 'silencioso',
    color: {
      bg: 'bg-emerald-600/10',
      border: 'border-emerald-600',
      text: 'text-emerald-800 dark:text-emerald-300',
      badgeBg: 'bg-emerald-700',
      iconColor: '#047857',
      gradient: 'from-emerald-600 to-green-700'
    },
    iconName: 'Library',
    image: readingImg,
    planCoordinates: {
      x: 6.5,
      y: 35,
      width: 12,
      height: 22
    }
  },
  {
    id: 'docente',
    name: 'Docente',
    shortDesc: 'Escritorio y materiales de planificación.',
    pedagogicalObjective:
      'Centro de gestión pedagógica, observación formativa, registro anecdotario del desarrollo infantil y custodia de materiales evaluativos.',
    competencies: [
      'Planificación y diseño de experiencias de aprendizaje',
      'Acompañamiento tutorial individualizado y retroalimentación',
      'Gestión de la convivencia y protocolos de seguridad del aula'
    ],
    materials: [
      'Escritorio docente con cajonera bajo llave para expedientes',
      'Silla ergonómica giratoria con apoyo lumbar',
      'Portafolio docente, carpetas de evaluación y anecdotarios',
      'Caja de primeros auxilios y botiquín institucional',
      'Planta ornamental y organizador de papelería'
    ],
    ergonomics:
      'Pared sur frontal, con vista panorámica a los 360° del aula para supervisión total y control inmediato de la puerta de ingreso/salida.',
    noiseLevel: 'silencioso',
    color: {
      bg: 'bg-slate-500/10',
      border: 'border-slate-500',
      text: 'text-slate-800 dark:text-slate-200',
      badgeBg: 'bg-slate-700',
      iconColor: '#475569',
      gradient: 'from-slate-700 to-slate-900'
    },
    iconName: 'UserCheck',
    image: techSocialImg,
    planCoordinates: {
      x: 35,
      y: 83,
      width: 20,
      height: 12
    }
  }
];

export const CLASSROOM_SPECS = {
  dimensions: {
    widthMeters: 6,
    lengthMeters: 4,
    areaSquareMeters: 24,
    ceilingHeightMeters: 2.8,
  },
  capacity: {
    minStudents: 12,
    recommendedStudents: 15,
    maxStudents: 18,
    areaPerStudent: '1.60 m² a 2.00 m² por alumno (cumple estándar MINEDU / UNESCO)'
  },
  lighting: {
    orientation: 'Norte (bifacial con ventanas continuas de 1.80 m de alto)',
    luxRecommended: '300 - 500 lux homogéneo en planos de trabajo',
    sunGlazeControl: 'Persianas regulables microperforadas'
  },
  circulation: {
    mainCorridorWidthMeters: 1.10,
    secondaryPassagesWidthMeters: 0.90,
    doorClearWidthMeters: 1.00,
    evacuationRouteTimeSeconds: '12 segundos promedio a zona segura exterior'
  },
  centralDesks: [
    { id: 'desk-1', x: 26, y: 44, label: 'Mesa 1 (2 puestos)' },
    { id: 'desk-2', x: 42, y: 44, label: 'Mesa 2 (2 puestos)' },
    { id: 'desk-3', x: 58, y: 44, label: 'Mesa 3 (2 puestos)' },
    { id: 'desk-4', x: 26, y: 62, label: 'Mesa 4 (2 puestos)' },
    { id: 'desk-5', x: 42, y: 62, label: 'Mesa 5 (2 puestos)' },
    { id: 'desk-6', x: 58, y: 62, label: 'Mesa 6 (2 puestos)' },
  ]
};

export const SLIDES_LIST = [
  {
    id: 'slide-master',
    title: 'Vista en Planta Arquitectónica (6 m × 4 m)',
    subtitle: 'Distribución completa de sectores y detalles de implementación según el anexo',
    category: 'Plano Principal'
  },
  {
    id: 'slide-overview',
    title: 'Fundamentación Pedagógica y Ficha Técnica',
    subtitle: 'Modelo de aprendizaje activo por rincones y análisis de capacidad espacial',
    category: 'Fundamentos'
  },
  {
    id: 'slide-sectors',
    title: 'Catálogo Integral de los 9 Sectores',
    subtitle: 'Competencias, inventario de mobiliario y objetivos de desarrollo infantil',
    category: 'Sectores'
  },
  {
    id: 'slide-spatial',
    title: 'Zonificación, Flujos y Normativa de Seguridad',
    subtitle: 'Dinámicas acústicas, ergonomía, ventilación y pasillos de evacuación',
    category: 'Arquitectura'
  },
  {
    id: 'slide-implementation',
    title: 'Guía de Operación y Rótulos de Aula',
    subtitle: 'Checklist para docentes, cronograma de rotación y recomendaciones prácticas',
    category: 'Gestión Docente'
  }
];
