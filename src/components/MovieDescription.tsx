import type { MovieDetails } from "../types/interface";
import { AboutMovie } from "./ui/AboutMovie";
import { Cast } from "./ui/Cast";
import { Director } from "./ui/Director";

type MovieDescriptionProps = Pick<
  MovieDetails,
  "description" | "cast" | "director"
>;

export const MovieDescription = ({
  description,
  cast,
  director,
}: MovieDescriptionProps) => {
  return (
    <div className="w-[70%] m-auto">
      <AboutMovie description={description} />
      <Cast cast={cast} />
      <Director director={director} />
    </div>
  );
};
