import { MovieCard } from "../../components/MovieCard";
import { MovieData } from "../../mockData/movieData";

const MainFeed = () => {
  return (
    <div
      className="h-[calc(100vh-5.75rem)] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-[70%] mx-auto grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10  place-items-center">
        {MovieData.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            posterUrl={movie.posterUrl}
            title={movie.title}
            genre={movie.genre}
            backPosterUrl={movie.backPosterUrl}
            votes={movie.votes}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;
