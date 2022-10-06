function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/WorldWideGreg/GregoryMorelPortfolioV2"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Next.js & Tailwind CSS Portfolio.
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
