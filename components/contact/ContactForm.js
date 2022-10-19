import MailSentModal from "../MailSentModal";
import { useState } from "react";
import { motion } from "framer-motion";

const selectOptions = [
  "Message personnel",
  "Proposition d'amélioration",
  "Contact professionnel",
];

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  function ShowFormModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
      document.getElementById("form").reset();
    }
  }   
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="leading-loose">
          <form
            id="form"
            action="/api/form"
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
              };
              ShowFormModal();
              const JSONdata = JSON.stringify(data);
              const endpoint = "/api/form";
              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSONdata,
              };

              const response = await fetch(endpoint, options);
              const result = await response.json();
            }}
            className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
          >
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Formulaire de contact
            </p>
            <div className="font-general-regular">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="name"
              >
                Nom / Entreprise
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom ou entreprise"
                aria-label="Name"
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Votre Email"
                aria-label="Email"
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="subject"
              >
                Sujet
              </label>
              <select
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Sujet"
                aria-label="Subject"
              >
                {" "}
                {selectOptions.map((option) => (
                  <option className="text-normal sm:text-md" key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                placeholder="Tapez ici votre message, mais préférez toujours un mail écrit directement depuis votre boite mail."
                cols="14"
                rows="6"
                aria-label="Message"
              ></textarea>
            </div>

            <div className="mt-6">
              <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                <button title="Envoyer" type="Submit" aria-label="Send Message">
                  Envoyer
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div>
        {showModal ? <MailSentModal onClose={ShowFormModal} /> : null}
        {showModal ? ShowFormModal : null}
      </div>
    </>
  );
}

export default ContactForm;
