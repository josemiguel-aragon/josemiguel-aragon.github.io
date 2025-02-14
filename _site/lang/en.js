// ---------- Navbar titles
const enNavbarData = {
  title: " José Miguel Aragón-Jurado",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Working experience",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "José Miguel Aragón-Jurado",
  jobTitle: "Predoctoral Researcher (FPU Fellow)",
  home_title: "About me",
  home_content: `
  <div>
    <p>I am a PhD student under the Spanish National FPU Fellowship. I hold a Bachelor of Science in Computer Engineering and a Master of Research in Systems and Computing Engineering, both from the University of Cádiz, where I received the Extraordinary Master's Degree Award for Best Academic Record. I am a member of the GOAL research group [TIC-259] at the University of Cádiz, as well as a member of the IEEE society. </p>

    <h2 class='title'> Main research</h2>

        <p>My research is primarily divided into four areas: Green Software, focused on optimizing the energy performance of software through empirical studies and the development of hardware measurement systems; Video Games and Artificial Intelligence, aimed at automatic performance optimization and energy efficiency; Source Code Obfuscation, which involves using artificial intelligence algorithms to protect software from malicious attacks; and Optimization of Public Transport Routes

    <p> My PhD research focuses on Green Software. It is built on three main pillars:</p>

    <ol>
      <li>Automatic optimization of software to generate higher performance and/or greener versions</li>
      <li> Green software for the Internet of Things </li>
      <li> Green video games </li>
    </ol>

    <p> Currently, I am developing the third pillar, concentrating my research on improving the energy consumption and performance of video games by applying AI-based algorithms. </p>
    <p> I hold a total of six publications in high-impact research journals indexed in the JCR: three in Q1 and two in Q2. In 2023, I received the Cepsa Foundation Chair Award for the article titled "Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor." These publications cover topics such as software optimization, code obfuscation, optimization of public transport emissions, deep learning models, and the application of artificial intelligence in video games.</p>
    <p>Additionally, I have contributed to six international conferences, receiving the Best Paper Award at the 32nd INGEGRAF International Conference held in Cádiz, Spain, for the paper titled "Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses." On the national level, I have presented six articles, winning the Best Paper Award at the III Spanish Video Game Congress held in A Coruña, Spain, for the work titled "Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck." </p>
    <br/>
    </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

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

  type_two_title: "Book Chapters",
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

  type_three_title: "Conference Papers",
  type_three_items: [
    {
      title: `Two-level Software Obfuscation with
Cooperative Co-evolutionary Algorithms. In 2024 IEEE Congress on Evolutionary Computation (CEC) (pp. 1-8).
IEEE. Yokohama, Japan. DOI: <a href=https://doi.org/10.1109/CEC60901.2024.10612116>10.1109/CEC60901.2024.10612116</a>`,
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
Sustainable Development Goals and Addressing Emerging Global Challenges. INGEGRAF. Valencia, Spain.`,
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
San Francisco, USA. DOI: <a href=https://doi.org/10.1109/IPDPSW63119.2024.00160>10.1109/IPDPSW63119.2024.00160</a>`,
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
Engineering. Springer, Cham. Cádiz, Spain. DOI:  <a href=https://doi.org/10.1007/978-3-031-51623-8_30>10.1007/978-3-031-51623-8_30</a>`,
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
Cham. Salamanca, Spain. DOI: <a href=https://doi.org/10.1007/978-3-031-18409-3_18>10.1007/978-3-031-18409-3_18</a>`,
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
Inspired Computing META. Marrakech, Morocco.`,
      abstract: "",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C."," Talbi E. G.","Dorronsoro B."],
    },

  ],

  type_four_title: "National Conference Papers",
  type_four_items: [
    {
      title: `Ofuscación de Software en dos
Niveles usando Algoritmos Cooperativos Coevolutivos. XV Congreso Español de Metaheurísticas, Algoritmos
Evolutivos y Bioinspirados. AEPIA. A Coruña, Spain`,
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
Informática de España. A Coruña, Spain.`,
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
Servicios (JCIS 2022). SISTEDES. Santiago de Compostela, Spain.`,
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
(JISBD 2022). SISTEDES. Santiago de Compostela, Spain.`,
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
Ingeniería Informática (JIPII 2022). University of Cádiz. Cádiz, Spain.`,
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
Informática (JIPII 2022). University of Cádiz. Cádiz, Spain.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: ["<strong>Aragón-Jurado J. M.</strong>","de la Torre J. C.","Benito-Jareño C.","Dorronsoro B."],
    },
  ],

  type_five_title: "Awards and Grants",
  type_five_items: [
    {
      title: `Best Paper Award - III Congreso Español de Videojuegos. Sociedad Científica Informática de España.`,
      abstract: "",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: `Best Journal Paper Award - Cepsa Foundation Chair Award. Cepsa.`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `Best Paper Award - International Conference on The Digital Transformation in Graphic Engineering 2023
(INGEGRAF 2023). INGEGRAF.`,
      abstract: "",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `Extraordinary Master's Degree Award (Best Academic Record) in Master of Research in Systems and
Computer Engineering.`,
      abstract: "",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: ` National FPU Fellowship. Ministery of Universities, Spain.`,
      abstract: "",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },

    {
      title: `First Prize Ideas - atrÉBT! (Edition XIII). University of Cádiz.`,
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
const enResearchPageData = {
  title: "Research",
  content: `

  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Working experience",
  items: [
    {
      title: `Predoctoral Researcher (FPU Fellow)`,
      company: "University of Cádiz",
      startData: "January 2023",
      endDate: "Present",
      location: "",
      abstract:
        "Expected PhD completion: November 2025",
      achievements: 
      [
         "PhD Thesis on Automatic Software Optimization for a Sustainable Internet of Things.",
         "Development of multiple complex Metaheuristic techniques, especially Genetic Algorithms, for solving optimization problems in Python.",
         "Extensive knowledge of LLVM infrastructure for C, C++, Objective C and Swift applications.",
         "Published research papers in high-impact journals and international conferences on different topics, including software optimization, code obfuscation, and artificial intelligence."
      ],
    },
    {
      title: `Graduate Research`,
      company: "University of Cádiz",
      startData: "November 2021",
      endDate: "September 2022",
      location: "",
      abstract:
        "",
      achievements: 
      [
        "Visualization and processing of data related to energy consumption in plug-in hybrid buses.",
        "Data processing, enrichment and imputation.",
        "Data uncertainty treatment.",
        "Development of predictive regression models.",
        "Optimization of plug-in hybrid bus operation strategies.",
        "Evaluation and validation of simulators, predictive tools, and optimized strategies developed throughout the project, assessing their accuracy and effectiveness to ensure they met project objectives."
      ],
    },
  ],
};

// ---------- Jobs page data
const enOverseasPageData = {
  title: "Overseas research experience",
  items: [
    {
      title: `Research Visitor`,
      company: "University of Alberta",
      startData: "May 2024",
      endDate: "August 2024",
      location: "",
      abstract:
        "",
      achievements: 
      [
         "Conducted an empirical study examining the impact of compiler optimizations on the energy consumption of applications running on iOS devices, with findings currently under review for publication in a Q1 JCR journal.",
      ],
    },
  ],
};
