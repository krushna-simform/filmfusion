import { useNavigate } from "react-router";
import type { MovieDetails } from "../utils/interface";
import { Image } from "./ui/Image";
import { Rating } from "./ui/Rating";

export const MovieCard = ({
  id,
  title,
  genre,
  posterUrl,
  backPosterUrl,
  votes,
}: Omit<MovieDetails, "cast" | "director" | "description">) => {
  const navigate = useNavigate();

  const cardClickHandler = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="flip-card w-64 h-110 cursor-pointer"
      onClick={cardClickHandler}
    >
      <div
        className="flip-card-inner h-full w-full"
        tabIndex={0}
        aria-label="Flip movie card"
      >
        <div className="flip-card-front absolute rounded-2xl overflow-hidden h-full w-full">
          <Image source={posterUrl} alt={title} />
          <div className="absolute flex flex-col items-center justify-center text-center gap-1 backdrop-blur-3xl bottom-0 h-30 px-2 w-full">
            <p className="text-white font-bold mt-1">{title}</p>
            <p className="text-slate-200">{genre}</p>
            <Rating
              positive={votes.positive}
              negative={votes.negative}
              fontSize="sm"
            />
          </div>
        </div>
        <div className="absolute flip-card-back rounded-2xl overflow-hidden h-full w-full">
          <Image source={backPosterUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};
