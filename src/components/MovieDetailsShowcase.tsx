import type { MovieDetails } from "../types/interface";
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
    <div className="relative w-full md:h-[28rem] flex flex-col md:flex-row items-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(${backPosterUrl})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col md:flex-row w-[90%] md:w-[70%] mx-auto items-center space-x-0 md:space-x-8">
        <DetailsPageMovieCard backPosterUrl={backPosterUrl} title={title} />
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <Rating
            negative={votes.negative}
            positive={votes.positive}
            fontSize="2xl"
          />
          <p className="text-lg md:text-xl text-gray-300">{genre}</p>
          <div
            onClick={bookTicketButtonHandler}
            className="flex justify-center md:justify-start"
          >
            <Button children="Book Ticket" ariaLabel="Book Ticket" key={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
