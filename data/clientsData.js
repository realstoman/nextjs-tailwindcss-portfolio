import { v4 as uuidv4 } from "uuid";

// Import images
import OclockImage from "../public/images/brands/oclockimage.png";
import UdemyImage from "../public/images/brands/udemy.png";
import OcrImage from "../public/images/brands/openclassrooms.png";
import StackOverFlow from "../public/images/brands/Stack_Overflow_logo.png";
import NBImage from "../public/images/brands/nb_gray.png";
import SamsungImage from "../public/images/brands/samsung_gray.png";
import CanonImage from "../public/images/brands/canon_gray.png";
import PumaImage from "../public/images/brands/puma_gray.png";

export const clientsHeading = "Mes ressources dans cette aventure: ";

export const clientsData = [
  {
    id: uuidv4(),
    title: "Oclock",
    img: OclockImage,
    link: "https://oclock.io/",
  },
  {
    id: uuidv4(),
    title: "Udemy",
    img: UdemyImage,
    link: "https://www.udemy.com/",
  },
  {
    id: uuidv4(),
    title: "OpenClassrooms",
    img: OcrImage,
    link: "https://openclassrooms.com/fr/",
  },
  {
    id: uuidv4(),
    title: "StackOverFlow",
    img: StackOverFlow,
  },
];

/*,
	
	
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
	},*/
