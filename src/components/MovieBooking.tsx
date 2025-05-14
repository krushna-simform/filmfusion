import type { MovieDetails } from "../types/interface";
import { MovieBookingSeats } from "./ui/MovieBookingSeats";
import { MovieTiming } from "./ui/MovieTiming";

type MovieBookProps = Pick<MovieDetails, "title" | "genre">;

export const MovieBook = ({ title, genre }: MovieBookProps) => {
  return (
    <div className="pt-5">
      <div className="max-w-[70%] mx-auto space-y-5">
        <p className="text-amber-200 text-4xl font-semibold">{title}</p>
        <span className="text-white text-xl border border-[var(--primary-color)] px-4 py-2 rounded-full">
          {genre}
        </span>
      </div>
      <MovieTiming />
      <MovieBookingSeats />
    </div>
  );
};
