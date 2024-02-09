import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieData, TVShowData, UpcomingMoviesData } from '../../models';

// Define a service using a base URL and expected endpoints
export const MovieDBApi = createApi({
  reducerPath: 'MovieDBAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/' }),
  endpoints: (builder) => ({
    getMovieData: builder.query<MovieData, void>({
      query: () => `/`
    }),
    getTvShowData: builder.query<TVShowData, void>({
      query: () => `/`
    }),
    getUpComingData: builder.query<UpcomingMoviesData, void>({
      query: () => `/`
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
