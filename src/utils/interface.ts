interface MovieCard {
  posterUrl: string;
  title: string;
  description: string;
  backPosterUrl: string;
  positiveVotes: number;
  negativeVotes: number;
}

type Votes = {
  total: number;
  positive: number;
  negative: number;
};

interface MovieDetails {
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  backPosterUrl: string;
  cast: Array<string>;
  director: string | Array<string>;
  votes: Votes;
}

export type { MovieCard, MovieDetails };
