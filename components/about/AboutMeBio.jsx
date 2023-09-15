import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      {/* <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpeg"
					width={200}
					height={200}
					className="rounded-lg grayscale"
					alt="Profile Image"
				/>
			</div> */}

      <div className="font-general-regular w-full text-left">
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
              className="h-full transition ease-in-out duration-300  rounded-lg grayscale hover:grayscale-0"
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
