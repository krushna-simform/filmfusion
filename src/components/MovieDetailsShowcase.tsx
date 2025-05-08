import type { MovieDetails } from "../utils/interface";
import { DetailsPageMovieCard } from "./DetailsPageMovieCard";
import { Rating } from "./ui/Rating";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router";

export const MovieDetailsShowcase = ({
  id,
  genre,
  title,
  votes,
  backPosterUrl,
}: Pick<
  MovieDetails,
  "id" | "genre" | "title" | "votes" | "backPosterUrl"
>) => {
  const navigate = useNavigate();

  const bookTicketButtonHandler = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="relative w-full h-[28rem] flex items-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(${backPosterUrl})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent backdrop-blur-sm" />

      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 items-center space-x-8">
        <DetailsPageMovieCard backPosterUrl={backPosterUrl} title={title} />
        <div className="space-y-3 max-w-xl">
          <h1 className="text-4xl font-bold">{title}</h1>
          <Rating
            negative={votes.negative}
            positive={votes.positive}
            fontSize="2xl"
          />
          <p className="text-xl text-gray-300">{genre}</p>
          <div onClick={bookTicketButtonHandler}>
            <Button children="Book Ticket" ariaLabel="Book Ticket" key={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
