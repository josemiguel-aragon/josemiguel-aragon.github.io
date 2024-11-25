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

    <p> Mi investigación doctoral se centra en el Software Verde. Está construida sobre tres pilares principales: </p>

    <ol>
      <li>Optimización automática de software para generar versiones de mayor rendimiento y/o más ecológicas</li>
      <li> Software Verde para el Internet de las Cosas </li>
      <li> Videojuegos Verdes </li>
    </ol>
    <p> Actualmente, estoy desarrollando el tercer pilar, centrando mi investigación en la mejora del consumo energético y el rendimiento de los videojuegos mediante la aplicación de algoritmos basados en IA. </p>
    <p> Poseo un total de cinco publicaciones en revistas de investigación de alto impacto indexadas en el JCR: tres en Q1 y dos en Q2. En 2023, recibí el Premio Cátedra Fundación Cepsa por el artículo titulado «Optimal Battery Management Strategies for Plug-in Electric Hybrid Buses on Routes Including Green Corridor.» Estas publicaciones abarcan temas como la optimización de software, la ofuscación de código, la optimización de las emisiones del transporte público, los modelos de aprendizaje profundo y la aplicación de la inteligencia artificial en los videojuegos. </p>
    <p>Además, he contribuido a seis conferencias internacionales, recibiendo el Premio a la Mejor Ponencia en la 32ª Conferencia Internacional INGEGRAF celebrada en Cádiz, España, por la ponencia titulada «Multivariable Visualization Tool of the Performance of Plug-In Hybrid Electric Buses.» A nivel nacional, he presentado seis artículos, obteniendo el Premio a la Mejor Ponencia en el III Congreso Español de Videojuegos celebrado en A Coruña, España, por el trabajo titulado «Optimización automática del videojuego Doom para un rendimiento óptimo en Steam Deck.» </p>
  </div>
  `,
};

// ---------- Publications page data
const esPublicationsPageData = {
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
const esResearchPageData = {
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
const esJobsPageData = {
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
