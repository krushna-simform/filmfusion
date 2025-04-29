import MovieCard from "./MovieCard";
import { MovieData } from "../utils/index";

const MainFeed = () => {
  return (
    <div
      className="h-[calc(100vh-5.75rem)] overflow-y-scroll py-8 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10 px-20"
      style={{ scrollbarWidth: "none" }}
    >
      {MovieData.map((movie) => (
        <MovieCard
          key={movie.title}
          movieImageUrl={movie.coverImage}
          movieTitle={movie.title}
          movieDescription={movie.genre}
          backImageUrl={movie.poster}
          positiveVotes={movie.votes.positive}
          negativeVotes={movie.votes.negative}
        />
      ))}
    </div>
  );
};

export default MainFeed;
