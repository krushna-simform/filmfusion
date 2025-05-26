import { useParams } from "react-router-dom";
import { MovieDetailsShowcase } from "../../components/MovieDetailsShowcase";
import { MovieData } from "../../mockData/movieData";
import type { MovieDetails } from "../../types/interface";
import { MovieDescription } from "../../components/MovieDescription";
import { PageNotFound } from "../../components/ui/PageNotFound";

const MovieDetails = () => {
  const { movieId } = useParams();

  const movie: MovieDetails | undefined = MovieData.find(
    (item) => item.id.toString() === movieId
  );

  return (
    <div
      className="h-[calc(100vh-5.75rem)] overflow-y-scroll pt-5"
      style={{ scrollbarWidth: "none" }}
    >
      {movie ? (
        <div>
          <MovieDetailsShowcase
            id={movie.id}
            title={movie?.title}
            backPosterUrl={movie.backPosterUrl}
            genre={movie.genre}
            votes={movie.votes}
          />
          <MovieDescription
            key={movie.id}
            description={movie.description}
            cast={movie.cast}
            director={movie.director}
          />
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default MovieDetails;
