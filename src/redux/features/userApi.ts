import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `api/users` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutQuery } = userApi;
