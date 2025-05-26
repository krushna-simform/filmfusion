type Votes = {
  total: number;
  positive: number;
  negative: number;
};

type Actor = {
  actorName: string;
  imageUrl: string;
  role: string;
};

type Director = {
  directorName: string;
  imageUrl: string;
};

interface MovieDetails {
  id: number;
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  backPosterUrl: string;
  cast: Array<Actor>;
  director: Array<Director>;
  votes: Votes;
}

export type { MovieDetails, Votes, Actor, Director };
