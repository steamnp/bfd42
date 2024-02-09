import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieData, TVShowData, UpcomingMoviesData } from '../../models';

const API_KEY = import.meta.env.VITE_API_KEY;

console.log('>>>>>' + API_KEY);
// Define a service using a base URL and expected endpoints
export const MovieDBApi = createApi({
  reducerPath: 'MovieDBAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getMovieData: builder.query<MovieData, void>({
      query: () => `movie/popular?api_key=${API_KEY}`
    }),
    getTvShowData: builder.query<TVShowData, void>({
      query: () => `trending/tv/day?api_key=${API_KEY}`
    }),
    getUpComingData: builder.query<UpcomingMoviesData, void>({
      query: () => `movie/upcoming?api_key=${API_KEY}`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMovieDataQuery,
  useGetTvShowDataQuery,
  useGetUpComingDataQuery
} = MovieDBApi;
