// ---------- Navbar titles
const esNavbarData = {
  title: " José Miguel Aragón-Jurado",
  Home: "Inicio",
  publications: "Publicaciones",
  Research: "Investigación",
  Jobs: "Experiencia laboral",
  Contact: "Contacto",
};

// ---------- Home page data
const esHomePageData = {
  name: "José Miguel Aragón-Jurado",
  jobTitle: "Investigador Postdoctoral Plan Estatal FPU",
  home_title: "Sobre mi",
  home_content: `
<div>
  <p>Investigador Postdoctoral Plan Estatal FPU del Ministerio de Universidades. Poseo un Grado en Ingeniería Informática y un Máster en Investigación en Sistemas y Computación (especialidad en Big Data), ambos por la Universidad de Cádiz, donde recibí el Premio Extraordinario de Máster al Mejor Expediente Académico. Soy miembro del grupo de investigación GOAL [TIC-259] y de las sociedades de IEEE y ACM.</p>

  <h2 class='title'>Líneas de investigación</h2>

  <p>Mi investigación se centra principalmente en tres líneas:</p>
  <ol>
    <li><strong>Green software:</strong> desarrollo de optimizaciones basadas en compiladores e inteligencia artificial para reducir el consumo energético y la huella de carbono del software, logrando hasta un 62% de mejora en tiempo de ejecución, un 58% de ahorro energético y aumentos significativos de rendimiento en videojuegos.</li>
    <li><strong>Transporte público sostenible:</strong> diseño de modelos inteligentes para la planificación de rutas energéticamente eficientes y la gestión de baterías en autobuses híbridos y eléctricos, con validaciones en grandes redes de transporte como la de Barcelona, alcanzando reducciones de hasta 295,8 kg de CO₂ diarios.</li>
    <li><strong>Ofuscación de código:</strong> aplicación de algoritmos evolutivos y transformaciones basadas en LLVM para reforzar la protección del software en entornos IoT y en la nube, obteniendo mejoras superiores a ×400 en seguridad del código con un impacto mínimo en el rendimiento.</li>
  </ol>

  <p>He publicado 9 artículos en revistas indexadas (7 Q1, 2 Q2) y más de 16 ponencias en congresos internacionales, incluyendo presentaciones en conferencias CORE A. Mi carrera académica incluye estancias de investigación en Japón (Ritsumeikan University, Osaka Metropolitan University) y Canadá (University of Alberta), que han resultado en múltiples publicaciones conjuntas e invitaciones a conferencias. También he recibido varios reconocimientos, como el Premio Cátedra Fundación Cepsa 2023 y diversos Best Paper Awards en congresos internacionales.</p>
  <br/>
</div>

  `,
};

// ---------- Publications page data
const esPublicationsPageData = {
  type_one_title: "Publicaciones en Revistas",

  type_one_items: [
    {
      title: `Does faster mean greener? Runtime and energy trade-offs in iOS applications with compiler optimizations. Elsevier. Sustainable Computing: Informatics and Systems. 47. 101166. <a href=https://doi.org/10.1016/j.suscom.2025.101166>10.1016/j.suscom.2025.101166</a>`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Bangash A. A.", "Dorronsoro B.", "Ali K.", "Hindle A.", "Ruiz P."],
    },
    {
      title: `Sustainable driving operations of urban plugin hybrid buses considering restricted emission mapping zones. Elsevier. 157. 111179. <a href=https://doi.org/10.1016/j.engappai.2025.111179>10.1016/j.engappai.2025.111179 </a>`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["Díaz-Jiménez M.", "<strong>Aragón-Jurado J. M.</strong>", "Dorronsoro B.", "Pavón-Domínguez P.", "Seredynski M.", "Ruiz P."],
    },
    {
      title: `Green Gaming: Automated Energy Consumption Reduction for Doom Engine. IEEE Consumer Electronics Magazine. IEEE. DOI: <a href=https://doi.org/10.1109/MCE.2025.3565227>10.1109/MCE.2025.3565227</a> (<strong>Outcome of research stay in Ritsumeikan University</strong>)`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Ruiz P.", "Dorronsoro B.", "Thawonmas R."],
    },
    {
      title: `Automatic software tailoring for Green Internet of Things. Internet of Things. Elsevier. 30. 101521. DOI: <a href=https://doi.org/10.1016/j.iot.2025.101521>10.1016/j.iot.2025.101521</a>`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Automatic Software Tailoring for Optimal Performance. IEEE Transactions on Sustainable Computing. IEEE. 9-3, pp.464-481. DOI: <a href=https://doi.org/10.1109/TSUSC.2023.3330671>10.1109/TSUSC.2023.3330671</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Ruiz P.", "Galindo P. L.", "Zomaya A. Y.", "Dorronsoro B."],
    },
    {
      title: `GAGI: Game engine for Artificial General Intelligence experimentation. SoftwareX. Elsevier. 26. DOI: <a href=https://doi.org/10.1016/J.SOFTX.2024.101665>10.1016/J.SOFTX.2024.101665</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.","<strong>Aragón-Jurado J. M.</strong>", "Crespo-Álvarez A.", "Bárcena-González G"],
    },
    {
      title: `Source code obfuscation with genetic algorithms using LLVM code optimizations. Logic Journal of the IGPL. Oxford University Press. DOI: <a href=https://doi.org/10.1093/jigpal/jzae069>10.1093/jigpal/jzae069</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.", "Jareño J.", "<strong>Aragón-Jurado J. M.</strong>", "Varrette S.", "Dorronsoro B."],
    },
    {
      title: `Neuroevolved bi-directional LSTM applied to zero emission zones management in urban transport. Applied Soft Computing. Elsevier. 148. DOI: <a href=https://doi.org/10.1016/J.ASOC.2023.110943>10.1016/J.ASOC.2023.110943</a>`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Jareño J.", "Dorronsoro B.", "Zomaya A. Y.", "Ruiz P."],
    },
    {
      title: `Optimal battery management strategies for plug-in electric hybrid buses on routes including green corridors. Sustainable Cities and Society. Elsevier. DOI: <a href=https://doi.org/94.10.1016/J.SCS.2023.104556>94.10.1016/J.SCS.2023.104556</a>`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: ["Ruiz P.","<strong>Aragón-Jurado J. M.</strong>","Seredynski M.","Cabrera J. F.","Peña D.","de la Torre J. C.","Zomaya A. Y.", "Dorronsoro B."],
    },
  ],

  type_two_title: "Capítulos de Libro",
  type_two_items: [
    {
      title: `A Survey on Automatic Source Code Transformation for Green Software Generation. Encyclopedia of Sustainable Technologies (Second Edition). Elsevier. 3, pp.765-779. DOI: <a href=https://doi.org/10.1016/B978-0-323-90386-8.00122-4>10.1016/B978-0-323-90386-8.00122-4</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["Dorronsoro B.", "<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "de la Torre J. C.", "Ruiz P."],
    },
  ],

  type_three_title: "Publicaciones en Congresos Internacionales",
  type_three_items: [
    {
      title: `A Two-step Approach to Find Short Compilation Transformation Sequences for Optimal Software Runtime Performance. Genetic and Evolutionary Computation Conference Companion (GECCO 2025). ACM. Málaga, España.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.", "<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Comparison on the use of Hybrid and Plugin Hybrid Electric Buses for Sustainable Urban Transportation – Split Use Case. 10th North American Conference on Industrial Engineering and Operations Management (IEOM 2025). Orlando, USA.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["Kalaica M.", "<strong>Aragón-Jurado J. M.</strong>", "Jakus I.", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Automatic Generation of Greener Software Program Versions with Genetic Algorithms. International Conference in Optimization and Learning (OLA 2025). Dubái, Emiratos Árabes Unidos.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Two-level Software Obfuscation with Cooperative Co-evolutionary Algorithms. IEEE Congress on Evolutionary Computation (CEC 2024). Yokohama, Japón. DOI: <a href="https://doi.org/10.1109/CEC60901.2024.10612116">10.1109/CEC60901.2024.10612116</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Bus Route Segmentation for Performance Optimization Using Geographical Mapping Tools. INGEGRAF 2024. Valencia, España. DOI: <a href="https://doi.org/10.1007/978-3-031-72829-7_60">10.1007/978-3-031-72829-7_60</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Electric Drive Assignment Strategies Optimization for Plugin Hybrid Urban Buses on Tailored Emissions Mapping. IEEE IPDPS Workshops (IPDPSW 2024). San Francisco, USA. DOI: <a href="https://doi.org/10.1109/IPDPSW63119.2024.00160">10.1109/IPDPSW63119.2024.00160</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Díaz-Jiménez M.", "Dorronsoro B.", "Pavón-Domínguez P.", "Seredynski M.", "Ruiz P."],
    },
    {
      title: `Software Performance Optimization with Genetic Algorithms. Tenth Spanish-German Symposium on Applied Computer Science (SGSOACS 2024). Cádiz, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.", "<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Management of Zero Emissions Zones in Urban Transport by Means of Neuroevolution. Tenth Spanish-German Symposium on Applied Computer Science (SGSOACS 2024). Cádiz, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["Jareño J.", "<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Battery Management Strategies Optimization for Urban Plug-in Hybrid Buses. International Conference in Optimization and Learning (OLA 2024). Dubrovnik, Croacia.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["Ruiz P.", "<strong>Aragón-Jurado J. M.</strong>", "Cabrera J. F.", "de la Torre J. C.", "Dorronsoro B."],
    },
    {
      title: `Automatic Software Performance Optimization using Genetic Algorithms. International Conference in Optimization and Learning (OLA 2024). Dubrovnik, Croacia.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses. INGEGRAF 2023. Cádiz, España. DOI: <a href="https://doi.org/10.1007/978-3-031-51623-8_30">10.1007/978-3-031-51623-8_30</a>`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Obfuscating LLVM Intermediate Representation Source Code with NSGA-II. CISIS-ICEUTE 2022. Salamanca, España. DOI: <a href="https://doi.org/10.1007/978-3-031-18409-3_18">10.1007/978-3-031-18409-3_18</a>`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.", "<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "Varrette S.", "Dorronsoro B."],
    },
    {
      title: `A Study on the Influence of Runtime Uncertainty in the Optimization of Software Programs. 8th International Conference on Metaheuristics and Nature Inspired Computing (META 2021). Marrakech, Marruecos.`,
      abstract: "",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Talbi E. G.", "Dorronsoro B."],
    }
  ],

  type_four_title: "Publicaciones en Congresos Nacionales",
  type_four_items: [
    {
      title: `Evolución de la infraestructura de compilación LLVM según las optimizaciones de código disponibles. XXIX Jornadas de Ingeniería del Software y Bases de Datos (JISBD 2025). SISTEDES. Córdoba, España.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["Vázquez-Rodríguez E.", "<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Dorronsoro B."],
    },
    {
      title: `GreenLinux: Un sistema operativo para la medición precisa del consumo energético del software. XXIX Jornadas de Ingeniería del Software y Bases de Datos (JISBD 2025). SISTEDES. Córdoba, España.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["Pérez-Vargas A.", "<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Dorronsoro B."],
    },
    {
      title: `Optimización en dos pasos del rendimiento del software usando transformaciones de compilación. XVI Congreso Español de Metaheurísticas, Algoritmos Evolutivos y Bioinspirados (MAEB 2025). AEPIA. San Sebastián, España.`,
      abstract: "",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.", "<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "Dorronsoro B.", "Ruiz P."],
    },
    {
      title: `Ofuscación de software en dos niveles usando algoritmos cooperativos coevolutivos. XV Congreso Español de Metaheurísticas, Algoritmos Evolutivos y Bioinspirados (MAEB 2024). AEPIA. A Coruña, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck. III Congreso Español de Videojuegos. Sociedad Científica Informática de España. A Coruña, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },
    {
      title: `Detección inteligente de sucesos en Smart Cities con feedback de los ciudadanos. XVII Jornadas de Ingeniería de Ciencia e Ingeniería de Servicios (JCIS 2022). SISTEDES. Santiago de Compostela, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Acuña-Vega L. E.", "Ortiz G.", "Boubeta-Puig J.", "Muñoz A."],
    },
    {
      title: `Optimización de programas software considerando la incertidumbre del tiempo de ejecución. XXVI Jornadas de Ingeniería del Software y Bases de Datos (JISBD 2022). SISTEDES. Santiago de Compostela, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Benito-Jareño C.", "Dorronsoro B."],
    },
    {
      title: `Hacia la detección inteligente de sucesos en ciudades inteligentes con la participación ciudadana. II Jornadas de Investigación Predoctoral en Ingeniería Informática (JIPII 2022). Universidad de Cádiz. Cádiz, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Acuña-Vega L. E.", "Ortiz G.", "Boubeta-Puig J.", "Muñoz A."],
    },
    {
      title: `Optimización robusta del tiempo de ejecución de programas software con algoritmos genéticos. II Jornadas de Investigación Predoctoral en Ingeniería Informática (JIPII 2022). Universidad de Cádiz. Cádiz, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "de la Torre J. C.", "Benito-Jareño C.", "Dorronsoro B."],
    }
  ],

  type_five_title: "Premios y Becas",
  type_five_items: [
    {
      title: "Ayuda de Movilidad FPU - Ministerio de Ciencia, Innovación y Universidades.",
      abstract: "Ayuda nacional competitiva de movilidad concedida en el marco del programa FPU para apoyar estancias internacionales de investigación. Clasificado en primera posición en Informática con la máxima puntuación posible.",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: `Premio al Mejor Artículo - III Congreso Español de Videojuegos. Sociedad Científica Informática de España.`,
      abstract: "Reconocimiento al trabajo titulado 'Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck'.",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `Premio al Mejor Artículo de Revista - Cátedra Fundación Cepsa.`,
      abstract: "Otorgado por el artículo 'Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor', publicado en Sustainable Cities and Society.",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `Premio al Mejor Artículo - Congreso Internacional INGEGRAF 2023.`,
      abstract: "Premiado por el artículo 'Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses', presentado en INGEGRAF 2023.",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `Premio Extraordinario de Fin de Máster (Mejor Expediente Académico) - Máster en Investigación en Ingeniería de Sistemas y de la Computación.`,
      abstract: "Otorgado al estudiante con el mejor rendimiento académico del programa de máster.",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `INICIA-INV Iniciación a la investigación - Modalidad trabajo final de Máster.`,
      abstract: "Beca de investigación competitiva concedida en el marco del Plan de Investigación y Transferencia de la UCA para apoyar a investigadores en fase inicial, basada en la excelencia académica y la calidad de la tesis de máster.",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `Beca Nacional FPU - Ministerio de Universidades, España.`,
      abstract: "Ayuda competitiva nacional para la realización del doctorado, otorgada por méritos académicos y de investigación.",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: [],
    },
    {
      title: `Primer Premio - Categoría Ideas - atrÉBT! (XIII Edición). Universidad de Cádiz.`,
      abstract: "Premio por un proyecto tecnológico innovador liderado por estudiantes, en el marco del concurso universitario de emprendimiento e innovación.",
      date: "2019",
      link: "",
      github: "",
      download: "",
      writers: [],
    }
  ],
};

// ---------- Research page data
const esResearchPageData = {
  title: "Líneas de investigación",
  content: `
  `,
};

// ---------- Jobs page data
const esJobsPageData = {
  title: "Experiencia laboral",
  items: [
        {
      title: `Investigador Postdoctoral (Plan Estatal FPU)`,
      company: "Universidad de Cádiz",
      startData: "Julio 2025",
      endData: "Actualidad",
      location: "Cádiz, España",
      abstract: "",
      achievements: []
    },
    {
      title: `Investigador Predoctoral (Plan Estatal FPU)`,
      company: "Universidad de Cádiz",
      startData: "Enero 2023",
      endData: "Julio 2025",
      location: "Cádiz, España",
      abstract:
        "",
      achievements: 
      [
        "Realización de una tesis doctoral titulada «Software Optimization for the Green Internet of Things».",
        "Propuso y resolvió tres problemas novedosos de optimización de compiladores (SCOP, gSCOP, FROP) usando algoritmos evolutivos y LLVM, logrando hasta un 62% de mejora en tiempo de ejecución y 58% en ahorro energético.",
        "Aplicación de la infraestructura del compilador LLVM para la transformación y optimización del código fuente en C, C++, Objective-C y Swift.",
        "Diseñó frameworks de optimización adaptativa para reducir el consumo energético en aplicaciones IoT, videojuegos y sistemas embebidos.",
        "Desarrolló modelos basados en ML (MEPBO, SUTRA, ML-EPBO) para buses híbridos, reduciendo hasta un 7.67% de CO₂ y alcanzando un 99.2% de precisión en la predicción de tráfico.",
        "Introdujo el modelo TSOP y creó el algoritmo C3GA, mejorando hasta 405× la protección del código en entornos de bajo consumo.",
        "Autor y coautor de 9 artículos en revistas indexadas (Q1/Q2) y más de 16 ponencias en congresos (incluyendo CORE A/A*); 4 artículos adicionales en revisión.",
        "Realizó estancias de investigación en Canadá y Japón, generando colaboraciones internacionales con publicaciones conjuntas."
      ]
    },
    {
      title: `Investigador Licenciado`,
      company: "Universidad de Cádiz",
      startData: "Noviembre 2021",
      endDate: "Septiembre 2022",
      location: "",
      abstract:
        "",
      achievements: 
      [
        "Visualización y tratamiento de datos relacionados con el consumo energético en autobuses híbridos enchufables.",
        "Procesado, enriquecimiento, e imputación de datos.",
        "Tratamiento de la incertidumbre en los datos.",
        "Desarrollo de modelos predictivos de regresión.",
        "Optimización de las estrategias de operación de autobuses híbridos enchufables.",
        "Evaluación y validación de simuladores, herramientas predictivas y estrategias optimizadas desarrolladas a lo largo del proyecto, valorando su precisión y eficacia para garantizar que cumplen los objetivos del proyecto."      ],
    },
  ],
};

// ---------- Jobs page data
const esOverseasPageData = {
  title: "Experiencia investigadora en el extranjero",
  items: [
    {
      title: `Investigador visitante`,
      company: "Ritsumeikan University",
      startData: "Abril 2025",
      endDate: "Junio 2025",
      location: "Ibaraki, Japón",
      abstract: "Estancia de investigación bajo la supervisión del Prof. Ruck Thawonmas.",
      achievements: [
        "Estudio experimental sobre la eficiencia energética en motores de videojuegos, con enfoque en la optimización del consumo del motor de Doom.",
        "Trabajo derivado publicado en la revista IEEE Consumer Electronics Magazine (IEEE)"
      ]
    },
    {
      title: `Investigador visitante`,
      company: "University of Alberta",
      startData: "Mayo 2024",
      endDate: "Agosto 2024",
      location: "Edmonton, Canadá",
      abstract: "Estancia de investigación bajo la supervisión del Prof. Abram Hindle.",
      achievements: [
        "Desarrollo de un estudio empírico sobre el impacto de las optimizaciones de compilador en el consumo energético de aplicaciones móviles en dispositivos iOS.",
        "Resultados publicados en la revista Sustainable Computing: Informatics and Systems (Elsevier)."
      ]
    }
  ],
};
