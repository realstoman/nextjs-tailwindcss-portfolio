import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function navMenu(array) {
        return (
          <>
          <div className=" ">
          <Link
            onClick={toggleMenu}
            href="/projects"
            aria-label="Projects"
            className="block text-left text-lg text-primary-dark hover:text-secondary-dark sm:py-2 p-2 hover:bg-indigo-200 rounded-lg duration-500"
          >
            Projects
          </Link>
        </div>
        <hr className="border-gray-100 " />
        </>
        )
  }
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sticky top-0 z-50  w-full "
    >
      {/* Header */}
      <div className="bg-white  z-10 w-full">
        <div className="flex max-w-screen-xl mx-auto px-6 justify-between items-center py-2">
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex justify-between items-center ">
            <div>
              <Link href="/">
                <div className="flex justify-center items-center gap-2 font-medium text-xs">
                  <div className="grid p-6 bg-primary-dark shadow-sm rounded-lg h-7 w-7 place-content-center">
                    <div className="flex justify-center text-primary-light">
                      Benja
                    </div>
                    <div className="flex justify-center text-primary-light">
                      miz
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* Small screen hamburger menu */}
          <div className="sm:hidden" ref={menuRef}>
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none w-12 h-12 font-general-medium flex justify-center items-center text-lg shadow-sm rounded-lg bg-primary-light hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
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
                  ? "absolute right-0 m-0 mt-2 sm:ml-4 sm:mt-3 md:flex px-5 py-3 pb-full sm: z-10 p-0 justify-between items-center shadow-lg sm:shadow-none bg-white rounded-lg w-full"
                  : "hidden"
              }
            >
              <div className=" ">
                <Link
                  onClick={toggleMenu}
                  href="/projects"
                  aria-label="Projects"
                  className="block text-left text-lg text-primary-dark hover:text-secondary-dark sm:py-2 p-2 hover:bg-indigo-200 rounded-lg duration-500"
                >
                  Projects
                </Link>
              </div>
              <hr className="border-gray-100 " />
              <div className="block text-left text-lg text-primary-dark hover:text-secondary-dark sm:py-2 p-2 hover:bg-indigo-200 rounded-lg  duration-500">
                <Link onClick={toggleMenu} href="/about" aria-label="About Me">
                  About Me
                </Link>
              </div>
              <hr className="border-gray-100 " />
              <div className="block text-left text-lg text-primary-dark hover:text-secondary-dark sm:py-2 p-2 hover:bg-indigo-200 rounded-lg duration-500">
                <Link onClick={toggleMenu} href="/contact" aria-label="Contact">
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
              aria-label="CV"
            >
              <Link href="/cv">Experience</Link>
            </div>
          </div>
        </div>
        {/* Header right section buttons */}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
