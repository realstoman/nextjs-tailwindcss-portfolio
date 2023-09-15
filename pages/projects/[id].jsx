import Image from "next/image";
import { useState } from "react";

import { FiClock, FiTag } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";
import ImageModal from "../../components/HireMeModal";
function ProjectSingle(props) {
  const chip = {
    header: "",
  };

  //   const [showModal, setShowModal] = useState(false);
  //   const [selectedImage, setSelectedImage] = useState(null);

  //   function showImageModal(image) {
  //     if (!showModal) {
  //       document
  //         .getElementsByTagName("html")[0]
  //         .classList.add("overflow-y-hidden");
  //       setShowModal(true);
  //       setSelectedImage(image);
  //     } else {
  //       document
  //         .getElementsByTagName("html")[0]
  //         .classList.remove("overflow-y-hidden");
  //       setShowModal(false);
  //       setSelectedImage(null);
  //     }
  //   }
  const renderLayout = (details, index) => {
    switch (details.styleID) {
      case "ImageOnly":
        return (
          <div className={styles.imageOnly}>
            {/* Your ImageOnly layout JSX */}
          </div>
        );
      case "textOnly":
        return (
          <div key={details.id} className="mb-8 mt-4">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h2 className="w-full flex justify-start text-2xl font-semibold">
                {details.title}
              </h2>
              <p className="font-general-italic text-ternary-dark text-center font-semibold  text-lg ">
                {details.body}
              </p>
            </div>
          </div>
        );
      case "allDetails":
        return (
          <>
            <div
              key={details.id}
              className={`grid md:flex gap-8 mb-8 mt-4 ${
                (index + 1) % 2 === 0 ? "" : "md:flex-row-reverse"
              } `}
            >
              <div className="md:w-2/5 grid gap-2">
                <Image
                  alt={details.alt}
                  src={details.img}
                  width={300}
                  height={300}
                  className="w-full rounded-lg"
                />
                <p className="text-center text-xs">{details.alt}</p>
              </div>

              <div
                className={`flex md:my-8  ${
                  details.img ? "md:w-3/5" : ""
                } flex-col justify-center items-center`}
              >
                <h2 className="w-full flex justify-start text-2xl font-semibold pb-2">
                  {details.title}
                </h2>

                <p className="">{details.body}</p>
              </div>
            </div>
          </>
        );
      case "quote":
        return (
          <div key={details.id} className="mb-8 mt-4">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h2 className="w-full flex justify-start text-2xl font-semibold">
                {details.title}
              </h2>
              <p className="font-general-italic text-ternary-dark text-center font-semibold  text-lg ">
                {details.body}
              </p>
            </div>
          </div>
        );
      case "chip":
        return (
          <div key={details.id} className="mb-8 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="w-full flex justify-start text-xl font-semibold text-gray-700 pb-2">
                {details.title}
              </h2>
              <p className="font-general-italic text-ternary-dark text-left font-semibold  text-lg ">
                "{details.body}"
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-4">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <p className="font-general-regular text-primary-dark">
            {props.project.ProjectHeader.description}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10">
        {/*  Single project right section details */}
        <div className="w-full text-left">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details, index) => {
            return <div key={details.id}>{renderLayout(details, index)}</div>;
          })}
        </div>
      </div>
      <RelatedProjects />
      {/* <div>
        {showModal ? (
          <ImageModal
            onClose={showImageModal}
            onRequest={showImageModal}
            image={selectedImage}
          />
        ) : null}
        {showModal ? showImageModal : null}
      </div> */}
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
