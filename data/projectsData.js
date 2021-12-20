import { v4 as uuidv4 } from 'uuid';
// Import images
import WebImage1 from '../public/images/web-project-1.jpg';
import WebImage2 from '../public/images/web-project-2.jpg';
import MobileImage1 from '../public/images/mobile-project-1.jpg';
import MobileImage2 from '../public/images/mobile-project-2.jpg';
import UIImage1 from '../public/images/ui-project-1.jpg';
import UIImage2 from '../public/images/ui-project-2.jpg';

export const projectsData = [
	{
		id: uuidv4(),
		title: 'Google Health Platform',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: uuidv4(),
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: MobileImage2,
	},
	{
		id: uuidv4(),
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: uuidv4(),
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: uuidv4(),
		title: 'React Social App',
		category: 'Mobile Application',
		img: MobileImage1,
	},
	{
		id: uuidv4(),
		title: 'Apple Design System',
		category: 'Web Application',
		img: WebImage1,
	},
];
