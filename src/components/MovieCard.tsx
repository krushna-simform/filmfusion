import type { MovieCard as MovieCardType } from "../utils/interface";

const MovieCard = ({
  movieImageUrl,
  movieTitle,
  movieDescription,
  backImageUrl,
  positiveVotes,
  negativeVotes,
}: MovieCardType) => {
  const formatVotes = (votes: number): string => {
    return votes >= 1000 ? (votes / 1000).toFixed(1) + "k" : votes.toString();
  };

  const totalVotes = positiveVotes + negativeVotes;
  const formattedTotalVotes = formatVotes(totalVotes);
  const averageRating = ((positiveVotes / totalVotes) * 10).toFixed(1);

  return (
    <div className="w-62 h-110 [perspective:1000px]">
      <div
        className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]"
        tabIndex={0}
        aria-label="Flip movie card"
      >
        <div className="absolute inset-0 bg-black rounded-2xl overflow-hidden">
          <img
            src={movieImageUrl}
            alt={movieTitle}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute flex flex-col items-center justify-center text-center gap-1 backdrop-blur-3xl bottom-0 h-30 px-2 w-full">
            <p className="text-white font-bold mt-1">{movieTitle}</p>
            <p className="text-slate-200">{movieDescription}</p>
            <p>
              <span className="text-amber-200 text-sm font-bold">
                {averageRating}/10
              </span>
              <span className="text-gray-200 text-sm font-bold ml-2">
                {formattedTotalVotes} Votes
              </span>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] bg-black rounded-2xl overflow-hidden [transform:rotateY(180deg)]">
          <img
            src={backImageUrl}
            alt="Back Side Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
