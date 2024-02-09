import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    fn1: builder.query({
      query: () => ''
    })
  })
});