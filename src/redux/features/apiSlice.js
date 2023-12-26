import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "articles",
    }),
    getArticleById: builder.query({
      query: (id) => `articles/${id}`,
    }),
    
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = api;
export default api;
