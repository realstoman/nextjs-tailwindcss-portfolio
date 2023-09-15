import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "The Paradox of Knowledge Handoffs",
    url: "the-paradox-of-knowledge-handoffs",
    category: "Working principles",
    img: "/images/project 1/group.jpg",
    ProjectHeader: {
      title: "The Paradox of Knowledge Handoffs",
      publishDate: "Jul 2023",
      description:
        "This case study discusses my experience at Insendi, focusing on the challenges of knowledge handover and the importance of collective learning for effective product development.",
    },
    ProjectInfo: {
      ProjectDetailsHeading: "",
      ProjectDetails: [
        {
          id: uuidv4(),
          styleID: "quote",
          title: "",
          img: "",
          alt: "",
          body: "How can I claim expertise in designing experiences if I can't effectively create a knowledge-sharing process that shapes our product development?",
        },
        {
          id: uuidv4(),
          styleID: "allDetails",
          title: "A Team in Flux",
          img: "/images/project 1/project_1_insendi2022.jpeg",
          alt: "product team Gran Canaria 2022",
          body: "I stepped into my role as product designer during a period of significant upheaval. A newly-appointed CTO had just arrived, accompanied by a fresh team of product managers and a technical director. Amidst this flux, the air was rife with speculation about the future of Insendi's product, vision, and strategy. Conversations were swirling around the idea of dividing Insendi into three distinct applications, each tailored to a specific Job To Be Done (JTBD).",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The coordinator's job to be done",
          img: "",
          alt: "",
          body: "When a student cohort wants to enrol on an online course, help me coordinate and manage student access, faculty support, and course maintenance so that a seamless and effective learning experience is ensured for all stakeholders.",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The Builder's job to be done",
          img: "",
          alt: "",
          body: "When tasked with educating a cohort of students through an online or blended format, help me design and structure a comprehensive and coherent course that effectively scaffolds the learning journey so that students can successfully master the subject matter and pass the course.",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The Deliverer's job to be done",
          img: "",
          alt: "",
          body: "When the course is live and students are actively participating, help me effectively guide, engage, and assess students throughout their learning journey so that they successfully complete the course and earn meaningful grades.",
        },
        {
          id: uuidv4(),
          styleID: "textOnly",
          title: "",
          img: "",
          alt: "",
          body: 'Our team was tasked with the "Build" aspect, but the project awaited formal approval. So while we waited the team focused on platform architecture and tech debt removal. The product manager and I had the opportunity to do some initial discovery.',
        },
      ],
    },
  },
  {
    id: 2,
    title: "Phoenix Digital Agency",
    url: "phoenix-digital-agency",
    category: "Mobile Application",
    img: "/images/mobile-project-2.jpg",
    ProjectHeader: {
      title: "Phoenix Digital Agency",
      publishDate: "Jul 26, 2021",
      tags: "Mobile Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
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
    },
  },
  {
    id: 3,
    title: "Project Management UI",
    url: "project-management-ui",
    category: "UI/UX Design",
    img: "/images/ui-project-1.jpg",
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
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
    id: 4,
    title: "Cloud Storage Platform",
    url: "cloud-storage-platform",
    category: "UI/UX Design",
    img: "/images/ui-project-2.jpg",
    ProjectHeader: {
      title: "Cloud Storage Platform",
      publishDate: "Jul 26, 2021",
      tags: "Web & Cloud",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Cloud Storage Platform",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Cloud Storage Platform",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Cloud Storage Platform",
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
    id: 5,
    title: "WeTalk Social Application",
    url: "wetalk-social-app",
    category: "Mobile Application",
    img: "/images/mobile-project-1.jpg",
    ProjectHeader: {
      title: "WeTalk Social Application",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "WeTalk Social Application",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "WeTalk Social Application",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "WeTalk Social Application",
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
    },
  },
  {
    id: 6,
    title: "Apple New Design System",
    url: "apple-new-design-system",
    category: "Web Application",
    img: "/images/web-project-1.jpg",
    ProjectHeader: {
      title: "Apple New Design System",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Apple New Design System",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Apple New Design System",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Apple New Design System",
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
];
