import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="fixed bg-white px-6 top-0 z-50  w-full "
    >
      {/* Header */}
      <div className="bg-white z-10 max-w-screen-md mx-auto flex py-2 justify-between items-center">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center sm:px-0">
          <div>
            <Link href="/">
              <div className="flex justify-center items-center gap-2 font-medium text-lg">
                <div className="grid p-6 bg-primary-light shadow-lg rounded-lg h-7 w-7 place-content-center">
                  Benjamiz
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Small screen hamburger menu */}
        <div className="sm:hidden ç">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none w-12 h-12 font-general-medium flex justify-center items-center text-lg shadow-lg rounded-lg bg-primary-light hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Hamburger Menu"
          >
            {showMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
          {/* Header links small screen */}
          <div
            className={
              showMenu
                ? "absolute right-6 m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 pb-full sm: z-10 p-0 justify-between items-center shadow-lg sm:shadow-none "
                : "hidden"
            }
          >
            <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
              <Link href="/projects" aria-label="Projects">
                Projects
              </Link>
            </div>
            <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
              <Link href="/about" aria-label="About Me">
                About Me
              </Link>
            </div>
            <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
              <Link href="/contact" aria-label="Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            <Link href="/about">About Me</Link>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Contact"
          >
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Header right section buttons */}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
