import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="text-white flex justify-between py-6 lg:px-20 sm:px-3">
      <div>
        <p
          className="text-[var(--primary-color)] text-4xl font-bold"
          role="heading"
        >
          FilmFusion
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative items-center hidden md:flex">
          <input
            type="text"
            placeholder="Search movies"
            className="h-10 w-100 border border-white text-white backdrop-blur-3xl rounded-sm px-2 pl-8"
          />
          <CiSearch
            className="h-6 w-6 absolute left-2"
            aria-label="Search icon"
          />
        </div>
        <button
          className="bg-[var(--primary-color)] py-2 px-4 text-lg rounded-lg cursor-pointer hover:bg-[var(--secondary-color)] transition ease-in-out"
          aria-label="Lgoin Button"
        >
          Login
        </button>
        <button
          className="bg-[var(--primary-color)] py-2 px-4 text-lg rounded-lg cursor-pointer hover:bg-[var(--secondary-color)] transition ease-in-out"
          aria-label="Register Button"
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
