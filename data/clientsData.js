import { v4 as uuidv4 } from 'uuid';

// Import images
import AmazonImage from '../public/images/brands/amazon_gray.png';
import SonyImage from '../public/images/brands/sony_gray.png';
import AdidasImage from '../public/images/brands/adidas_gray.png';
import FilaImage from '../public/images/brands/fila_gray.png';
import NBImage from '../public/images/brands/nb_gray.png';
import SamsungImage from '../public/images/brands/samsung_gray.png';
import CanonImage from '../public/images/brands/canon_gray.png';
import PumaImage from '../public/images/brands/puma_gray.png';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Amazon',
		img: AmazonImage,
	},
	{
		id: uuidv4(),
		title: 'Sony',
		img: SonyImage,
	},
	{
		id: uuidv4(),
		title: 'Adidas',
		img: AdidasImage,
	},
	{
		id: uuidv4(),
		title: 'FILA',
		img: FilaImage,
	},
	{
		id: uuidv4(),
		title: 'NB',
		img: NBImage,
	},
	{
		id: uuidv4(),
		title: 'SAMSUNG',
		img: SamsungImage,
	},
	{
		id: uuidv4(),
		title: 'CANON',
		img: CanonImage,
	},
	{
		id: uuidv4(),
		title: 'PUMA',
		img: PumaImage,
	},
];
