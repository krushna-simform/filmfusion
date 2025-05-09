import { useParams } from "react-router-dom";
import { MovieDetailsShowcase } from "../../components/MovieDetailsShowcase";
import { MovieData } from "../../data/movieData";
import type { MovieDetails } from "../../utils/interface";
import { MovieDetailsDescription } from "../../components/MovieDetailsDescription";
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
          <MovieDetailsDescription
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
