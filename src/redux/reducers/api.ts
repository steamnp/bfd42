import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = import.meta.env.VITE_API_URL;

export const movieDBAPI = createApi({
  reducerPath: 'movieDBAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopulaMovieData: builder.query({
      query: () => `discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
    }),
    getTVShowData: builder.query({
      query: () =>
        `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=string&api_key=${apiKey}`
    }),
    getUpcomingMoviesData: builder.query({
      query: () => `movie/upcoming?language=en-US&page=2&api_key=${apiKey}`
    })
  })
});

export const {
  useGetPopulaMovieDataQuery,
  useGetUpcomingMoviesDataQuery,
  useGetTVShowDataQuery
} = movieDBAPI;
