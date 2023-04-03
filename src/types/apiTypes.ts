import { Movie, Series, Standup } from "./store";

export interface ApiTypes {
  title: string;
  type: Movie | Series | Standup;
  cover: string;
  year: number;
  maturityRating: number;
  description: string;
  key: string
}

export interface MovieApiTypes extends ApiTypes {
  type: Movie
}

export interface SeriesApiTypes extends ApiTypes {
  type: Series
}

export interface StandupApiTypes extends ApiTypes {
  type: Standup
}