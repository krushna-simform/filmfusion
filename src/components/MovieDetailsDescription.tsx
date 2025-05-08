import type { MovieDetails } from "../utils/interface";
import { AboutMovie } from "./ui/AboutMovie";
import { Cast } from "./ui/Cast";
import { Director } from "./ui/Director";

export const MovieDetailsDescription = ({
  description,
  cast,
  director,
}: Pick<MovieDetails, "description" | "cast" | "director">) => {
  return (
    <div className="w-[70%] m-auto">
      <AboutMovie description={description} />
      <Cast cast={cast} />
      <Director director={director} />
    </div>
  );
};
