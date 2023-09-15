import { useState } from "react";
import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";

function ProjectSingle(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader.title} {isOpen.toString()}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none hover:"
                alt={project.title}
                key={project.id}
                onClick={() => showModal(project.img)}
                layout="responsive"
                width={100}
                height={90}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://stoman.me"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
      </div>

      <RelatedProjects />

      {isOpen && (
        <div className="z-50 bg-black/50 absolute inset-0 grid place-items-center">
          <div className="bg-white flex p-8 grid gap-4 rounded-lg">
            <header className="inline-flex gap-2 items-center">
              <h1 className="flex text-xl grow font-normal">Title</h1>
              <button
                label="close"
                className="relative rounded-lg grid place-items-center hover:bg-gray-200"
                onClick={closeModal}
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    transform="translate(12.5,12.5)"
                    d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
                  />
                </svg>
              </button>
            </header>
            <main className="my-2">
              <Image
                src={selectedImage}
                alt="test"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </main>
            <footer className="gap-2 flex">
              <button
                onClick={closeModal}
                className="rounded-md px-8 py-2 bg-red-500 border border-transparent text-white text-base font-medium hover:border-red-800 hover:underline"
              >
                Confirm
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
