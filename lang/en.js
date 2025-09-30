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
  jobTitle: "Postdoctoral Researcher (FPU Fellow)",
  home_title: "About me",
  home_content: `
<div>
  <p>PhD in Computer Science and Postdoctoral Researcher (FPU Fellow) at the University of Cádiz, Spain. I hold a Bachelor of Science in Computer Engineering and a Master of Research in Systems and Computing Engineering (Big Data specialization), both from the University of Cádiz, where I received the Extraordinary Master's Degree Award for Best Academic Record. I am a member of the GOAL research group [TIC-259] at the University of Cádiz and member of the IEEE and ACM societies.</p>

  <h2 class='title'>Main research</h2>

  <p>My research is primarily divided into three main lines:</p>
  <ol>
    <li><strong>Green software:</strong> developing compiler- and AI-based optimizations to reduce the energy consumption and carbon footprint of applications, achieving up to 62% faster runtimes, 58% energy savings, and significant improvements in gaming performance.</li>
    <li><strong>Sustainable public transport:</strong> designing intelligent models for energy-aware route planning and battery management in hybrid and electric buses, with frameworks validated in large-scale networks such as Barcelona, reducing up to 295.8 kg of CO₂ per day.</li>
    <li><strong>Software code obfuscation:</strong> applying evolutionary algorithms and LLVM-based transformations to strengthen software protection in IoT and cloud environments, achieving over 400× improvements in code security with minimal overhead.</li>
  </ol>

  <p>I have authored 9 peer-reviewed journal articles (7 Q1, 2 Q2) and more than 20 conference papers, including presentations at CORE A venues. My academic career includes research stays in Japan (Ritsumeikan University, Osaka Metropolitan University) and Canada (University of Alberta), resulting in multiple joint publications and invited talks. I have also received several distinctions, including the 2023 Cepsa Foundation Chair Award and multiple Best Paper Awards at international conferences.</p>
  <br/>
</div>

  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

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
      title: `Comparison on the use of Hybrid and Plugin Hybrid Electric Buses for Sustainable Urban Transportation – Split Use Case. 10th North American Conference on Industrial Engineering and Operations Management (IEOM 2025). Orlando, USA. <a href=https://doi.org/10.1007/978-3-031-98235-4_12>10.1007/978-3-031-98235-4_12</a>`,
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
      title: "Doctoral Defense Incentive – Modality B (€1000), University of Cadiz",
      abstract: "Grant awarded to support the final stage and defense of the PhD thesis.",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
    {
      title: "FPU Mobility Grant - Spanish Ministry of Science, Innovation and Universities.",
      abstract: "Competitive national mobility grant awarded under the FPU program to support international research stays. Ranked first in Computer Science with the highest possible evaluation score.",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: [""],
    },
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
      title: `Postdoctoral Researcher (FPU Fellow)`,
      company: "University of Cádiz",
      startData: "July 2025",
      endData: "Present",
      location: "Cádiz, Spain",
      abstract: "",
      achievements: 
      []
    },
    {
      title: `Predoctoral Researcher (FPU Fellow)`,
      company: "University of Cádiz",
      startData: "January 2023",
      endData: "July 2025",
      location: "Cádiz, Spain",
      abstract: "",
      achievements: 
      [
        "PhD Thesis titled 'Software Optimization for the Green Internet of Things'.",
        "Proposed and solved 3 novel compiler optimization problems (SCOP, gSCOP, FROP) using evolutionary algorithms and LLVM, achieving up to 62% faster runtimes and 58% energy savings.",
        "Designed adaptive software optimization frameworks for energy-efficient IoT, gaming, and embedded systems.",
        "Developed ML-based models (MEPBO, SUTRA, ML-EPBO) for hybrid bus systems, reducing CO₂ emissions by up to 7.67% and reaching 99.2% prediction accuracy.",
        "Introduced the TSOP obfuscation model and created the C3GA algorithm, improving code protection by up to 405× in low-power environments.",
        "Published 9 journal papers (Q1/Q2) and over 16 international conference papers (incl. CORE A/A*); 4 more journal articles under review.",
        "Conducted international research stays in Canada and Japan, leading to ongoing collaborations and joint publications."
      ]
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
        "The resulting work is published in IEEE Consumer Electronics Magazine (IEEE)."
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
        "The findings are published in Sustainable Computing: Informatics and Systems (Elsevier)."
      ]
    }
  ]
};

