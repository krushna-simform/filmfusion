import type { MovieCard as MovieCardType } from "../utils/interface";

const formatVotes = (votes: number): string => {
  return votes >= 1000 ? (votes / 1000).toFixed(1) + "k" : votes.toString();
};

export const MovieCard = ({
  posterUrl,
  title,
  description,
  backPosterUrl,
  positiveVotes,
  negativeVotes,
}: MovieCardType) => {
  const totalVotes = positiveVotes + negativeVotes;
  const formattedTotalVotes = formatVotes(totalVotes);
  const averageRating = ((positiveVotes / totalVotes) * 10).toFixed(1);

  return (
    <div className="flip-card w-64 h-110">
      <div
        className="flip-card-inner h-full w-full"
        tabIndex={0}
        aria-label="Flip movie card"
      >
        <div className="flip-card-front absolute rounded-2xl overflow-hidden h-full w-full">
          <img
            src={posterUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute flex flex-col items-center justify-center text-center gap-1 backdrop-blur-3xl bottom-0 h-30 px-2 w-full">
            <p className="text-white font-bold mt-1">{title}</p>
            <p className="text-slate-200">{description}</p>
            <p>
              <span className="text-amber-200 text-sm font-bold">
                {averageRating}
              </span>
              <span className="text-gray-200 text-sm font-bold ml-2">
                {formattedTotalVotes}
              </span>
            </p>
          </div>
        </div>
        <div className="absolute flip-card-back rounded-2xl overflow-hidden h-full w-full">
          <img
            src={backPosterUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
