import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Site Web statique",
    url: "https://worldwidegreg.github.io/SiteWebUdemy/",
    category: "Html/Css",
    img: "/images/siteudemy.jpg",
    ProjectHeader: {
      title: "Découverte du Web",
      publishDate: "Janvier , 2022",
      tags: "UI / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "HtmlCss",
        img: "/images/csslogo.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "A propos du projet",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Nom du projet",
          details: "Site Portfolio",
        },

        {
          id: uuidv4(),
          title: "Website",
          details: "https://worldwidegreg.github.io/SiteWebUdemy/",
        },
      ],
      ObjectivesHeading: "Objectifs",
      ObjectivesDetails: "Apprendre les bases du web en HTML et CSS",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: ["HTML", "CSS", "Django"],
        },
      ],
      ProjectDetailsHeading: "",
      ProjectDetails: [],
    },
  },
  {
    id: 2,
    title: "Scripting",
    url: "Python",
    category: "Python",
    img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "Python scripts",
      publishDate: "Juin, 2022",
      tags: "desktop application scripts automation",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Python",
        img: "/images/pythonlogo.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "",
      CompanyInfo: [],
      ObjectivesHeading: "Objectifs",
      ObjectivesDetails:
        "Progresser dans la compréhension du développement et de l'algorythmie, mise en place de solutions légères permettant de solutionner des problèmes simples mais chronophages. Progammes utilisés dans le cadre de mes missions de Gendarme/Enquêteur. Ayant eu une grande utilité mais n'ayant pas été déployés officièlement.",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: [
            "Python3",
            "Pycharm",
            "kivy",
            "Visual Studio Code",
            "Git",
            "Anaconda",
            "Jupyter Notebook",
            "cURL",
            "API",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Automate Python de récupération de mails spéciaux, parsing du Pdf trouvé en pièce-jointe et renvoi d'un mail précis aux destinataires en fonction des données du Pdf. Intérêt: Permettre aux gens n'étant pas au bureau de connaitre leurs missions du lendemain sans avoir à appeler/passer au bureau.",
        },
        {
          id: uuidv4(),
          details:
            "Application desktop/android framework Kivy permettant de scrapper des données Météo et d'accéder à l'API Google Calendar. Intérêt: Via une vielle tablette inutilisée, avoir une DashBoard Météo et Agenda/ToDoList familiale.",
        },
        {
          id: uuidv4(),
          details:
            "Challenges et Clash of code sur la plateforme Codingame. Intérêt: Apprendre à coder en Python et à résoudre des problèmes de manière efficace.",
        },
        {
          id: uuidv4(),
          details:
            "Script de transcription de paroles via la capture du flux audio du micro. Intérêt: Permettre à des personnes malentendantes de lire les paroles d'une personne en temps réel.",
        },
        {
          id: uuidv4(),
          details:
            "Script de transcription de paroles via l'utilisation de l'API AssemblyAI. Intérêt: Transcrire des fichiers audio, ou des vidéos en fichiers textes.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Portfolio V1",
    url: "https://worldwidegreg.github.io/MyPortfolio/",
    category: "Front-end",
    img: "/images/ProjetPortfolioV1.png",
    ProjectHeader: {
      title: "Project UI",
      publishDate: "août, 2022",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Web",
        img: "/images/csslogo.png",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/jquery.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "A propos du projet",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Portfolio personnel",
        },

        {
          id: uuidv4(),
          title: "Website",
          details: "https://worldwidegreg.github.io/MyPortfolio/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Designer et développer un site web pour me présenter et présenter mes projets et mes compétences.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Jquery", "Github"],
        },
      ],
      ProjectDetailsHeading: "",
      ProjectDetails: [],
      SocialSharingHeading: "",
    },
  },
  {
    id: 4,
    title: "Cloud Storage",
    url: "/",
    category: "Management Server",
    img: "/images/Yunohost.png",
    ProjectHeader: {
      title: "Serveur maison",
      publishDate: "Avril, 2022",
      tags: "Web & Cloud",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Cloud Storage Platform",
        img: "/images/debian.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "",
      CompanyInfo: [],
      ObjectivesHeading: "Objectifs",
      ObjectivesDetails:
        "Comprendre et administrer un serveur soi-même. Gérer un service Cloud personnel. Faire des tests de déploiement.",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: ["Debian", "Yunohost", "Bash", "Linux"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Il s'agit là d'un challenge personnel, me permettant uniquement de découvrir et comprendre les problématiques côté server. Le tout en me permettant de stocker mes données personnelles et de les rendre accessibles à distance.",
        },
      ],
      SocialSharingHeading: "",
    },
  },
];

/* ------------------------------------
{
    id: 5,
    title: "React Social App",
    url: "react-social-app",
    category: "Mobile Application",
    img: "/images/mobile-project-1.jpg",
    ProjectHeader: {
      title: "React Social App",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul React Social App",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul React Social App",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul React Social App",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 6,
    title: "Apple Design System",
    url: "apple-design-system",
    category: "Web Application",
    img: "/images/web-project-1.jpg",
    ProjectHeader: {
      title: "Apple Design System",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Apple Design System",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Apple Design System",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Apple Design System",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  }, */
