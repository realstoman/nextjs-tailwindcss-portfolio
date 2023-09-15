import { v4 as uuidv4 } from "uuid";

export const aboutMeData = [
  {
    id: uuidv4(),
    title: "👤 About me",
    image: "/images/About me.jpeg",
    bio: (
      <>
        I'm Benjamin, a problem solver who loves a challenge. I excel at
        simplifying complex issues and taking the initiative to fix what's
        broken. I value direct communication and factual reasoning, and I'm
        committed to personal growth and sensitivity to others' needs. Outside
        work, I'm an avid learner, bouldering enthusiast, and{" "}
        <a
          href="https://open.spotify.com/track/3N0QZQLosy8SQR6kVrp5Bn?si=d27ac100d9c74ccf"
          target="_blank"
          rel="noopener noreferrer"
		  className="hover:underline"
        >
          singer-songwriter
        </a>{" "}
        who's always keen to expand my knowledge.
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "👨‍👩‍👧‍👦 Family & Me",
    image: "/images/family.jpeg",
    bio: "We're a team in the making—my wife, our two kids, and me. With respect, honesty, and patience, we're laying the foundation for our shared exsitence. It's a work in progress, but it's my most important project.",
  },
  {
    id: uuidv4(),
    title: "👨‍💻 Professional Me",
    image: "/images/Professional me.jpeg",
    bio: "I thrive in agile settings, advocating for full team involvment throughout development. My design approach balances user needs with business goals. With a strong technical understanding, I excel at fostering collaboration to deliver impactful, straightforward solutions.",
  },
  {
    id: uuidv4(),
    title: "🔍 Curious me",
    image: "/images/received_293930208080632_Original.jpeg",
    bio: "I'm naturally curious, and always eager to dig deeper. I am continually working towards making the fuzzy focused through investigation, questions and validating work often with other stake holders",
  },
  {
    id: uuidv4(),
    title: "🎯 Why Me?",
    image: "/images/Cliff.jpg",
    bio: "I'm passionate about product development and deeply committed to refining the principles that guide how my team and I build products. My approach blends empathy, collaboration, and curiosity with strategic thinking and continuous learning. This holistic perspective enables us to truly embody the agile methodology in every project we undertake.",
  },
];
