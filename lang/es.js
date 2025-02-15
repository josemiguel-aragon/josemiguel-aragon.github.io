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
  jobTitle: "Investigador Predoctoral Plan Estatal FPU",
  home_title: "Sobre mi",
  home_content: `
  <div>
    <p> Investigador Predoctoral del Plan Estatal FPU.
    Graduado en Ingeniería Informática con un Máster de Investigación en Ingeniería Informática y de Sistemas, ambos por la Universidad de Cádiz, donde recibió el Premio Extraordinario de Máster al Mejor Expediente Académico.
    Miembro del grupo de investigación GOAL [TIC-259] de la Universidad de Cádiz, así como miembro de la sociedad IEEE. </p>

    <h2 class='title'> Líneas de investigación principales</h2>
    
    <p>Mi investigación se divide principalmente en cuatro áreas: Green Software, enfocada en optimizar el rendimiento energético del software a través de estudios empíricos y el desarrollo de sistemas de medición de hardware; Videojuegos e Inteligencia Artificial, destinada a la optimización automática del rendimiento y la eficiencia energética; Ofuscación de Código Fuente, que implica el uso de algoritmos de inteligencia artificial para proteger el software de ataques maliciosos; y Optimización de Rutas de Transporte Público, donde utilizamos algoritmos de IA para la gestión de la batería en vehículos híbridos y herramientas para analizar las emisiones de las infraestructuras de transporte público en áreas urbanas.</p>


    <p> Mi investigación doctoral se centra en el Software Verde. Está construida sobre tres pilares principales: </p>

    <ol>
      <li>Optimización automática de software para generar versiones de mayor rendimiento y/o más ecológicas</li>
      <li> Software Verde para el Internet de las Cosas </li>
      <li> Videojuegos Verdes </li>
    </ol>
    <p> Actualmente, estoy desarrollando el tercer pilar, centrando mi investigación en la mejora del consumo energético y el rendimiento de los videojuegos mediante la aplicación de algoritmos basados en IA. </p>
    <p> Poseo un total de seis publicaciones en revistas de investigación de alto impacto indexadas en el JCR: tres en Q1 y tres en Q2. En 2023, recibí el Premio Cátedra Fundación Cepsa por el artículo titulado «Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor.» Estas publicaciones abarcan temas como la optimización de software, la ofuscación de código, la optimización de las emisiones del transporte público, los modelos de aprendizaje profundo y la aplicación de la inteligencia artificial en los videojuegos. </p>
    <p>Además, he contribuido a seis conferencias internacionales, recibiendo el Premio a la Mejor Ponencia en la 32ª Conferencia Internacional INGEGRAF celebrada en Cádiz, España, por la ponencia titulada «Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses.» A nivel nacional, he presentado seis artículos, obteniendo el Premio a la Mejor Ponencia en el III Congreso Español de Videojuegos celebrado en A Coruña, España, por el trabajo titulado «Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck.» </p>
  </div>
  `,
};

// ---------- Publications page data
const esPublicationsPageData = {
  type_one_title: "Publicaciones en Revistas",

  type_one_items: [
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
      title: `Two-level Software Obfuscation with
Cooperative Co-evolutionary Algorithms. In 2024 IEEE Congress on Evolutionary Computation (CEC) (pp. 1-8).
IEEE. Yokohama, Japón. DOI: <a href=https://doi.org/10.1109/CEC60901.2024.10612116>10.1109/CEC60901.2024.10612116</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Jareño J.", "de la Torre J. C.", "Ruiz P.", "Dorronsoro B."],
    },

    {
      title: `Bus Route Segmentation for Performance Optimization Using
Geographical Mapping Tools. International - Research and Innovation in Graphic Engineering: Tools for Achieving
Sustainable Development Goals and Addressing Emerging Global Challenges. INGEGRAF. Valencia, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Dorronsoro B.", "Ruiz P."],
    },

    {
      title: `Electric Drive Assignment Strategies Optimization for Plugin Hybrid Urban Buses on Tailored Emissions Mapping. In 2024
IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW) (pp. 909-918). IEEE.
San Francisco, Estados Unidos. DOI: <a href=https://doi.org/10.1109/IPDPSW63119.2024.00160>10.1109/IPDPSW63119.2024.00160</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","Díaz-Jiménez M.","Dorronsoro B.","Pavón-Domínguez P.","Seredynski M.", "Ruiz P."],
    },

    {
      title: `Multivariable Visualization Tool of the Performance of Plug-In
Hybrid Electric Buses. Advances in Design Engineering IV. INGEGRAF 2023. Lecture Notes in Mechanical
Engineering. Springer, Cham. Cádiz, España. DOI:  <a href=https://doi.org/10.1007/978-3-031-51623-8_30>10.1007/978-3-031-51623-8_30</a>`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>", "Dorronsoro B.", "Ruiz P."],
    },

    {
      title: `Obfuscating LLVM Intermediate
Representation Source Code with NSGA-II. International Joint Conference 15th International Conference on
Computational Intelligence in Security for Information Systems (CISIS 2022) 13th International Conference on
EUropean Transnational Education (ICEUTE 2022). Lecture Notes in Networks and Systems, vol 532. Springer,
Cham. Salamanca, España. DOI: <a href=https://doi.org/10.1007/978-3-031-18409-3_18>10.1007/978-3-031-18409-3_18</a>`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: ["de la Torre J. C.","<strong>Aragón-Jurado J. M.</strong>","Jareño J.","Varrette S.","Dorronsoro B."],
    },

    {
      title: `A Study on the Influence of Runtime
Uncertainty in the Optimization of Software Programs. 8th International Conference on Metaheuristics and Nature
Inspired Computing META. Marrakech, Marruecos.`,
      abstract: "",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C."," Talbi E. G.","Dorronsoro B."],
    },

  ],

  type_four_title: "Publicaciones en Congresos Nacionales",
  type_four_items: [
    {
      title: `Ofuscación de Software en dos
Niveles usando Algoritmos Cooperativos Coevolutivos. XV Congreso Español de Metaheurísticas, Algoritmos
Evolutivos y Bioinspirados. AEPIA. A Coruña, España`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>"," Jareño J."," de la Torre J. C."," Ruiz P."," Dorronsoro B."],
    },
    {
      title: `Optimización automática del videojuego
Doom para un rendimiento óptimo en Steam Deck. III Congreso Español de Videojuegos. Sociedad Científica
Informática de España. A Coruña, España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C."," Ruiz P."," Dorronsoro B."],
    },
    {
      title: `Detección Inteligente de
Sucesos en Smart Cities con Feedback de los Ciudadanos. XVII Jornadas de Ingeniería de Ciencia e Ingeniería de
Servicios (JCIS 2022). SISTEDES. Santiago de Compostela, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","Acuña-Vega L. E.","Ortiz G.","Boubeta-Puig J.","Muñoz A."],
    },
    {
      title: `Optimización de programas software
considerando la incertidumbre del tiempo de ejecución. XXVI Jornadas de Ingeniería del Software y Bases de Datos
(JISBD 2022). SISTEDES. Santiago de Compostela, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C.","Benito-Jareño C.","Dorronsoro B."],
    },
    {
      title: `Hacia la Detección Inteligente
de Sucesos en Ciudades Inteligentes con la Participación Ciudadana. II Jornadas de Investigación Predoctoral en
Ingeniería Informática (JIPII 2022). Universidad de Cádiz. Cádiz, España.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","Acuña-Vega L. E.","Ortiz G.","Boubeta-Puig J.","Muñoz A."],
    },
    {
      title: `Optimización robusta del tiempo de
ejecución de programas software con Algoritmos Genéticos. II Jornadas de Investigación Predoctoral en Ingeniería
Informática (JIPII 2022). Universidad de Cádiz. Cádiz, Spain.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C.","Benito-Jareño C.","Dorronsoro B."],
    },
  ],

  type_five_title: "Premios y becas",
  type_five_items: [
    {
      title: `Premio al Mejor Artículo - III Congreso Español de Videojuegos. Sociedad Científica Informática de España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: `Premio al Mejor Artículo de Revista - Cátedra de la Fundación Cepsa. Cepsa.`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `Premio al Mejor Artículo - International Conference on The Digital Transformation in Graphic Engineering 2023
(INGEGRAF 2023). INGEGRAF.`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `Premio extraordinario final de Máster (Mejor Expediente Académico) en el Máster de Investigación en
  Ingeniería de Sistemas y de la Computación.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: ` Beca Nacional FPU. Ministerio de Universidades, España.`,
      abstract: "",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `Primer premio en la Categoría Ideas - atrÉBT! (Edición XIII). Universidad de Cádiz.`,
      abstract: "",
      date: "2019",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
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
      title: `Investigador Predoctoral Plan Estatal FPU`,
      company: "Universidad de Cádiz",
      startData: "Enero 2023",
      endDate: "Actualidad",
      location: "",
      abstract:
        "Finalización prevista del doctorado: Noviembre de 2025",
      achievements: 
      [
         "Doctorado sobre Optimización Automática del Software para un Internet de las Cosas Sostenible. Se basa en tres pilares principales: (1) Optimización automática de software para generar versiones de mayor rendimiento y/o más sostenibles, (2) Software Verde para el Internet de las Cosas, y (3) Videojuegos sostenibles.",
         "Desarollo de múltiples técnicas Metaheurísticas complejas, especialmente Algoritmos Genéticos, para la resolución de problemas de optimización en Python.",
         "Amplio conocimiento de la infraestructura LLVM para aplicaciones de C, C++, Objective C y Swift.",
         "Múltiples publicaciones de artículos de investigación en revistas JCR y congresos internacionales sobre distintas temáticas: Optimización del Software, Ofuscación de código, Optimización de las Emisiones del Transporte Público de una Ciudad, Modelos de Deep Learning, Inteligencia Artificial en Videojuegos."
      ],
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
      company: "University of Alberta",
      startData: "Mayo 2024",
      endDate: "Agosto 2024",
      location: "",
      abstract:
        "",
      achievements: 
      [
        "Se realizó un estudio empírico para examinar el impacto de las optimizaciones del compilador en el consumo de energía de las aplicaciones que se ejecutan en dispositivos iOS, cuyos resultados están actualmente en revisión para su publicación en una revista JCR del primer cuartil."      ],
    },
  ],
};
