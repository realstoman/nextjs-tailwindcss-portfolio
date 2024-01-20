import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Open Weather API App',
		url: '',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Weather App',
			publishDate: 'Jan 28,2024',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Weather App',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'First Project',
					details: 'Followed YT tutorial.',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: '',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '484 775-0868',
				},
			],
			ObjectivesHeading: 'Insight',
			ObjectivesDetails:
				"Building a weather app in HTML, CSS, and JavaScript, guided by a YouTube channel, can be an enriching journey with multiple objectives. ",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Node.js',
					
					],
				},
			],
			ProjectDetailsHeading: 'Challenges & Overview',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Building my first weather app in HTML, CSS, and JavaScript was like scaling a beginner's mountain – exciting, challenging, and ultimately rewarding. While the summit promises stunning views of your newfound coding skills, I had to prepare for some rocky patches along the way up and back down. ",
				},
				{
					id: uuidv4(),
					details:
						"Connecting to weather APIs might seem like scaling a sheer ice wall, especially if data handling and parsing are new concepts to you. My patience and perseverance were key here. Deciphering API documentation, tackling different data formats, and celebrating each smooth integration is a mini-summit in the grand scheme of it all.",
				},
				{
					id: uuidv4(),
					details:
						"Despite that, hitting roadblocks or battling endless bugs can sap your energy. But just like a refreshing rest stop, breaks and small wins can rekindle your spark. Celebrate progress, no matter how small, and keep your eye on the breathtaking view from the summit!",
				},
				{
					id: uuidv4(),
					details:
						"Without a classroom setting, it might feel like you're climbing solo. But fear not! Online communities, mentors, and helpful forums are just a rope throw away. Reach out, ask questions, and learn from the experiences of others.",
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/',
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
			// 		url: 'https://www.youtube.com/',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Netflix Clone',
		url: 'https://netflix-clone-invidias.web.app/',
		category: 'Web Application',
		img: '/images/mobile-project-2.jpg',
		ProjectHeader: {
			title: 'Netflix Clone',
			publishDate: 'Feb 14, 2024',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Netflix Clone',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Netflix Clone',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Netflix Clone',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Netflix Clone',
					details: 'Developed by Joshua-Jair',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Demo',
					details: 'https://netflix-clone-invidias.web.app/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '484 775-0868',
				},
			],
			ObjectivesHeading: 'Insights 💻',
			ObjectivesDetails:
				"A curated library of movies and TV shows, complete with captivating descriptions, images, and trailers. Explore data scraping or content management systems to populate your kingdom.",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						"Firebase",
						"TMDB",
					],
				},
			],
			ProjectDetailsHeading: 'Challenges & Overview',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Mastering React's component-based structure and state management was like navigating a confusing forest. But fear not! With practice, I learned to build reusable components, handle user interactions, and create a dynamic interface that feels as smooth as silk.",
				},
				{
					id: uuidv4(),
					details:
						" Firebase's Realtime Database or Cloud Firestore offer powerful data storage, but navigating the depths can be tricky. Master data structures, queries, and synchronization to keep your content kingdom organized and readily accessible.",
				},
				{
					id: uuidv4(),
					details:
						"Personalization Paradise: User profiles, watchlists, and recommendations can make your platform truly feel like home. Design algorithms, store user preferences, and curate personalized experiences that keep viewers coming back for more.",
				},
				{
					id: uuidv4(),
					details:
						"Social Summit: Adding social features like shared watchlists, friend recommendations, and online discussions can transform your platform into a thriving community. Climb the social summit and create a space for shared viewing experiences.",
				},
			],
			SocialSharingHeading: 'Share This',
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
			// 		url: 'https://www.youtube.com/',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'Inventory Management UI',
		url: 'project-management-ui',
		category: 'UI/UX Design',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'Inventory Management  UI',
			publishDate: 'Jul 26, 2024',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'IMS UI',
					details: 'Simple yet Interactive UX',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Demo',
					details: '🚧 UNDER CONSTRUCTION 🚧',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: '',
				},
			],
			ObjectivesHeading: 'Key Insights 💡',
			ObjectivesDetails:
				"Choose appropriate libraries and frameworks depending on the project's complexity, performance requirements, and desired functionalities. Consider potential scalability needs and ensure chosen technologies can adapt to future growth. Prioritize security and implement robust data protection measures.",
				
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenges & Overview',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Data Considerations: Analyze the existing inventory data structure and any potential integration points with other systems. Consider the frequency and volume of data updates to ensure the UI can handle them efficiently. Establish clear data ownership and access control protocols. User Interface Design: Prioritize clarity and ease of use. Implement visual cues and intuitive interfaces to make data accessible and actionable. Optimize for responsiveness and mobile accessibility, especially if users might access the UI on different devices. Utilize features like interactive reports, charts, and visualizations to present inventory insights effectively. Technology Stack: Choose appropriate libraries and frameworks depending on the project's complexity, performance requirements, and desired functionalities. Consider potential scalability needs and ensure chosen technologies can adapt to future growth. Prioritize security and implement robust data protection measures.",
				},
				{
					id: uuidv4(),
					details:
						"Testing and Maintenance: Plan for thorough testing at various stages of development, including unit testing, integration testing, and user acceptance testing. Establish a clear maintenance plan to address bugs, address changing needs, and implement new features over time.",
				},
				{
					id: uuidv4(),
					details:
						"Explore potential integrations with barcode scanners, point-of-sale systems, or automated inventory tracking technologies. Consider utilizing real-time data updates and notifications to stay informed about inventory changes. Implement features that promote user engagement, such as customizable dashboard views or user-specific inventory alerts.",
				},
				{
					id: uuidv4(),
					details:
						"Meet User Needs: The UI should effectively address the specific inventory management needs of its intended users and streamline their workflows. User Satisfaction: Users should find the UI easy to use, efficient, and helpful in managing their inventory tasks. Data Accuracy and Integrity: The UI should maintain accurate and up-to-date inventory data to ensure reliable decision-making and avoid stock-related issues.",
				},
			],
			SocialSharingHeading: 'Share This',
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
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	url: 'cloud-storage-platform',
	// 	category: 'UI/UX Design',
	// 	img: '/images/ui-project-2.jpg',
	// 	ProjectHeader: {
	// 		title: 'Cloud Storage Platform',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'Web & Cloud',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 5,
	// 	title: 'WeTalk Social Application',
	// 	url: 'wetalk-social-app',
	// 	category: 'Mobile Application',
	// 	img: '/images/mobile-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'WeTalk Social Application',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple New Design System',
	// 	url: 'apple-new-design-system',
	// 	category: 'Web Application',
	// 	img: '/images/web-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'Apple New Design System',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/',
	// 		// 	},
	// 		// ],
	// 	},
	// },
];
