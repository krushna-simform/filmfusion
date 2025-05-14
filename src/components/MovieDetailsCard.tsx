import type { MovieDetails } from "../types/interface";
import { Image } from "./ui/Image";

type MovieDetailsCardProps = Pick<MovieDetails, "title" | "backPosterUrl">;

export const MovieDetailsCard = ({
  title,
  backPosterUrl,
}: MovieDetailsCardProps) => {
  return (
    <div className="min-w-64 h-100 rounded-2xl overflow-hidden" tabIndex={0}>
      <Image source={backPosterUrl} alt={`Poster of the movie ${title}`} />
    </div>
  );
};
