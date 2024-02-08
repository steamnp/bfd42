import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const MovieDBApi = createApi({
  reducerPath: 'MovieDBAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovieData: builder.query({
      query: () => ``
    }),
    getTvShowData: builder.query({
      query: () => ``
    }),
    fn3: builder.query({
      query: () => ``
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieDataQuery, useGetTvShowDataQuery } = MovieDBApi;
