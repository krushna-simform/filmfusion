import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { MovieData } from "../../mockData/movieData";

export const Search = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredMovies.length > 0) {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredMovies.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        handleSearchClick(filteredMovies[selectedIndex].id);
      }
    }
  };

  const handleSearchClick = (movieId: number) => {
    navigate(`/details/${movieId}`);
    setSearchMovie("");
    setSelectedIndex(-1);
  };

  return (
    <div className="relative items-center hidden md:flex">
      <input
        type="text"
        placeholder="Search movies"
        className="h-10 w-100 border border-white text-white backdrop-blur-3xl rounded-sm px-2 pl-8"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <CiSearch className="h-6 w-6 absolute left-2" aria-label="Search icon" />
      {searchMovie && (
        <div className="absolute top-full left-0 w-100 bg-black text-white border border-gray-700 rounded-md mt-2 z-50 max-h-60 overflow-y-auto">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className={`p-2 hover:bg-gray-800 cursor-pointer ${
                  selectedIndex === index ? "bg-gray-700" : ""
                }`}
                onClick={() => handleSearchClick(movie.id)}
              >
                <h2 className="text-lg">{movie.title}</h2>
              </div>
            ))
          ) : (
            <p className="text-red-500 p-2">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};
