export interface Movie {
  typeName: 'Movie'
  time: number;
  director: string;
  script: string[];
  cast: string[];
  genres: string[];
  categories: string[];
}

export interface Series {
  typeName: 'Series'
  seasons: Season[];
  creators: string[];
  cast: string[];
  genres: string[];
  categories: string[];
}

export interface Standup {
  typeName: 'Standup'
  time: number;
  script: string[];
  cast: string[];
  genres: string[];
  categories: string[];
}

export type Season = {
  seasonNumber: number;
  episodes: Episode[];
}

export type Episode = {
  episodeNumber: number;
  title: string;
  time: number;
}