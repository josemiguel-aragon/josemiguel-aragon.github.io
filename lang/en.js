// ---------- Navbar titles
const enNavbarData = {
  title: " José Miguel Aragón-Jurado",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Jobs",
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

    <p> My PhD research focuses on Green Software. It is built on three main pillars:</p>

    <ol>
      <li>Automatic optimization of software to generate higher performance and/or greener versions</li>
      <li> Green software for the Internet of Things </li>
      <li> Green video games </li>
    </ol>

    <p> Currently, I am developing the third pillar, concentrating my research on improving the energy consumption and performance of video games by applying AI-based algorithms. </p>
    <p> I hold a total of five publications in high-impact research journals indexed in the JCR: three in Q1 and two in Q2. In 2023, I received the Cepsa Foundation Chair Award for the article titled "Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor." These publications cover topics such as software optimization, code obfuscation, optimization of public transport emissions, deep learning models, and the application of artificial intelligence in video games.</p>
    <p>Additionally, I have contributed to six international conferences, receiving the Best Paper Award at the 32nd INGEGRAF International Conference held in Cádiz, Spain, for the paper titled "Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses." On the national level, I have presented six articles, winning the Best Paper Award at the III Spanish Video Game Congress held in A Coruña, Spain, for the work titled "Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck." </p>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
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
  ],

  type_four_title: "National Conference Papers",
  type_four_items: [
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
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
