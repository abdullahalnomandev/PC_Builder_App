
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-theta.vercel.app/api/v1"
  }),
  tagTypes: ["books"],
  endpoints: () => ({})
});

