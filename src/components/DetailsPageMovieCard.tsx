import type { MovieDetails } from "../utils/interface";
import { Image } from "./ui/Image";

export const DetailsPageMovieCard = ({
  title,
  backPosterUrl,
}: Pick<MovieDetails, "title" | "backPosterUrl">) => {
  return (
    <div className="min-w-64 h-100 rounded-2xl overflow-hidden" tabIndex={0}>
      <Image source={backPosterUrl} alt={`Poster of the movie ${title}`} />
    </div>
  );
};
