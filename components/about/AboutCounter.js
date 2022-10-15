import { useCountUp } from "react-countup";

function AboutCounter() {
  useCountUp({ ref: "experienceCounter", end: 1, duration: 2 });
  //useCountUp({ ref: "githubStarsCounter", end: 1, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 100, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 4, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
            <span id="experienceCounter" />
            an(s)
          </h2>
          <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
            d'expérience autodidacte
          </span>
        </div>
        {/*}
        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
            <span id="githubStarsCounter" /> k+
            </h2>
          <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
            stars
          </span>
  </div>  */}

        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
            <span id="feedbackCounter" /> %
          </h2>
          <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
            de motivation
          </span>
        </div>

        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
            <span id="projectsCounter" />
          </h2>
          <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
            projets répondant à des vrais besoins
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter;
