const API_KEY = "4d4328ac76fb9d7a255fefc63af5da0f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  data: {
    maximum: string;
    minimum: string;
  };
  page: 1;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface ITv {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

export interface IGetPopTvResult {
  results: ITv[];
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getPopTvs() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
}
