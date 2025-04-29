interface MovieCard {
  movieImageUrl: string;
  movieTitle: string;
  movieDescription: string;
  backImageUrl: string;
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
  coverImage: string;
  poster: string;
  cast: Array<string>;
  directorName: string | Array<string>;
  votes: Votes;
}

export type { MovieCard, MovieDetails };
