import type { MovieDetails } from "../../types/interface";

export const AboutMovie = ({
  description,
}: Pick<MovieDetails, "description">) => {
  return (
    <div className="py-10">
      <p
        className="text-amber-200 text-3xl font-bold"
        aria-label="About the movie"
      >
        About the movie
      </p>
      <p
        className="text-white text-justify mt-3 text-lg"
        aria-label="Movie Description"
      >
        {description}
      </p>
    </div>
  );
};
