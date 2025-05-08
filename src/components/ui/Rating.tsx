import type { Votes } from "../../utils/interface";

interface RatingType extends Votes {
  fontSize: "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const formatVotes = (votes: number): string => {
  return votes >= 1000 ? (votes / 1000).toFixed(1) + "k" : votes.toString();
};

export const Rating = ({
  positive,
  negative,
  fontSize = "sm",
}: Omit<RatingType, "total">) => {
  const totalVotes = positive + negative;
  const formattedTotalVotes = formatVotes(totalVotes);
  const averageRating = ((positive / totalVotes) * 10).toFixed(1);
  return (
    <p
      aria-label={`Rating: ${averageRating} out of 10, based on ${formattedTotalVotes} votes`}
    >
      <span className={`text-amber-200 text-${fontSize} font-bold`}>
        {averageRating}/10
      </span>
      <span className={`text-gray-200 text-${fontSize} font-bold ml-2.5`}>
        {formattedTotalVotes}
      </span>
    </p>
  );
};
