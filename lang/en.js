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
  <p>I am a PhD candidate in Computer Science at the University of Cádiz, funded by the Spanish National FPU Fellowship. I hold a Bachelor of Science in Computer Engineering and a Master of Research in Systems and Computing Engineering (Big Data specialization), both from the University of Cádiz, where I received the Extraordinary Master's Degree Award for Best Academic Record. I am a member of the GOAL research group [TIC-259] at the University of Cádiz, and a member of the IEEE society.</p>

  <h2 class='title'>Main research</h2>

  <p>My research is primarily divided into four areas: Green Software, focused on optimizing the energy performance of software through compiler-based transformations and metaheuristic algorithms; Video Games and Artificial Intelligence, where I apply AI to enhance energy efficiency and runtime in commercial engines; Source Code Obfuscation, using evolutionary algorithms and LLVM-based transformations to protect software; and Optimization of Public Transport Routes, focused on energy-aware route planning and battery management for hybrid and electric vehicles.</p>

  <p>My PhD research focuses on Green Software. It is built on three main pillars:</p>

  <ol>
    <li>Automatic optimization of software to generate higher performance and/or greener versions</li>
    <li>Green software for the Internet of Things</li>
    <li>Green video games</li>
  </ol>

  <p>Currently, I am developing the third pillar, concentrating my research on improving the energy consumption and performance of video games by applying AI-based optimization algorithms to engines like Doom, with empirical validation on devices such as Steam Deck.</p>
  <p>I have published eigth articles in high-impact JCR-indexed journals (four Q1, four Q2), with three additional submissions currently under review at IEEE and Elsevier journals. In 2023, I was awarded the Cepsa Foundation Chair Award for the paper titled "Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor."</p>
  <p>I have contributed to over ten international conferences—including CORE A/A*—and received several Best Paper Awards, such as at the 2024 Spanish Video Game Congress (for "Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck") and the 2023 INGEGRAF International Conference (for "Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses").</p>
  <br/>
</div>

  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
        {
      title: `Optimization of Urban Public Transport System Sustainability using Plugin Hybrid Buses for Tailored Emissions Mapping. Engineering Applications of Artificial Intelligence. Elsevier. 157. 111179. <a href=https://doi.org/10.1016/j.engappai.2025.111179>10.1016/j.engappai.2025.111179 </a>`,
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
  

  type_four_title: "National Conference Papers",
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

  type_five_title: "Awards and Grants",
  type_five_items: [
    {
      title: "Best Paper Award - III Congreso Español de Videojuegos. Sociedad Científica Informática de España.",
      abstract: "Awarded for the work 'Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck'.",
      date: "2024",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "Best Journal Paper Award - Cátedra Fundación Cepsa. Cepsa.",
      abstract: "Awarded for the article 'Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor'.",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "Best Paper Award - International Conference on The Digital Transformation in Graphic Engineering (INGEGRAF 2023).",
      abstract: "Awarded for the paper 'Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses'.",
      date: "2023",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "Extraordinary Master's Degree Award - Master of Research in Systems and Computer Engineering.",
      abstract: "Granted to the student with the best academic record in the program.",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "INICIA-INV Research Initiation Grant.",
      abstract: "Competitive research grant awarded under the UCA Research and Transfer Plan to support early-stage researchers based on academic excellence and the quality of the master’s thesis.",
      date: "2022",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "National FPU Fellowship - Ministry of Universities, Spain.",
      abstract: "Highly competitive national research grant for doctoral studies.",
      date: "2021",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "First Prize - atrÉBT! Ideas Competition (13th Edition), University of Cádiz.",
      abstract: "Awarded for an innovative student-led technology project in entrepreneurship and innovation.",
      date: "2019",
      link: "",
      github: "",
      download: "",
      writers: [""],
    }
  ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `

  `,
};

const enJobsPageData = {
  title: "Working experience",
  items: [
    {
      title: `Predoctoral Researcher (FPU Fellow)`,
      company: "University of Cádiz",
      startData: "January 2023",
      endData: "Present",
      location: "Cádiz, Spain",
      abstract:
        "Expected PhD completion: July 2025",
      achievements: [
        "PhD Thesis titled 'Software Optimization for Green Internet of Things'.",
        "Design and implementation of multi-objective metaheuristics (Genetic Algorithms, Cooperative Co-evolution, NSGA-II) for reducing energy consumption and execution time.",
        "Advanced experience with the LLVM compiler infrastructure applied to source code transformation and optimization in C, C++, Objective-C, and Swift.",
        "Development of green-aware optimization pipelines for mobile apps and video games, validated through empirical studies on platforms such as iOS and Steam Deck.",
        "Authored and co-authored 8 peer-reviewed journal articles (Q1/Q2) and over 10 international conference papers, including presentations at CORE A/A* conferences.",
        "Participated in international research stays at the University of Alberta (Canada) and Ritsumeikan University (Japan), resulting in collaborative publications under review at IEEE and Elsevier journals."
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
      company: "Ritsumeikan University",
      startData: "April 2025",
      endDate: "June 2025",
      location: "Ibaraki, Japan",
      abstract: "Research stay under the supervision of Prof. Ruck Thawonmas.",
      achievements: [
        "Conducted an experimental study on the energy efficiency of video game engines, focusing on compiler-level optimizations for the classic Doom engine.",
        "The resulting work is published in IEEE Consumer Electronics Magazine (IEEE, JCR Q2)."
      ]
    },
    {
      title: `Research Visitor`,
      company: "University of Alberta",
      startData: "May 2024",
      endDate: "August 2024",
      location: "Edmonton, Canada",
      abstract: "Research stay under the supervision of Prof. Abram Hindle.",
      achievements: [
        "Carried out an empirical study on the effects of compiler optimizations on energy consumption in iOS applications.",
        "The findings have been submitted to Sustainable Computing: Informatics and Systems (Elsevier, JCR Q1) and are currently under review."
      ]
    }
  ]
};

