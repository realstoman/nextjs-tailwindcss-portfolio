import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="font-general-regular text-left">
        {aboutMe.map((bio, index) => (
          <div
            className={`mb-8 text-ternary-dark dark:text-ternary-light text-lg grid gap-12 place-items-center md:flex md:flex-row  md:gap-8  ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            key={bio.id}
          >
            <Image
              src={bio.image}
              width={250}
              height={450}
              className="h-full transition ease-in-out   rounded-lg grayscale hover:grayscale-0 duration-500"
              alt="Profile Image"
            />
            <div className="pb-10">
              <h3 className="text-xl font-semibold pb-4">{bio.title}</h3>
              <p>{bio.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
