import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="relative items-center hidden md:flex">
      <input
        type="text"
        placeholder="Search movies"
        className="h-10 w-100 border border-white text-white backdrop-blur-3xl rounded-sm px-2 pl-8"
        aria-label="Search movies"
      />
      <CiSearch className="h-6 w-6 absolute left-2" aria-label="Search icon" />
    </div>
  );
};
