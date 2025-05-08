import { useParams } from "react-router-dom";
import { MovieData } from "../../data/movieData";
import type { MovieDetails } from "../../utils/interface";
import { MovieBook } from "../../components/MovieBooking";

const MovieBooking = () => {
  const { movieId } = useParams();

  const movie: MovieDetails | undefined = MovieData.find(
    (item) => item.id.toString() === movieId
  );
  return (
    <div
      className="h-[calc(100vh-5.75rem)] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {movie ? (
        <MovieBook title={movie.title} genre={movie.genre} />
      ) : (
        <p className="text-white">Movie data is not found</p>
      )}
    </div>
  );
};

export default MovieBooking;
