import { createApi } from "@reduxjs/toolkit/dist/query/react";

//  base query
import { privateBaseQuery } from "..";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: privateBaseQuery("/chats"),
  endpoints: (builder: any) => ({
    getChats: builder.query({
      query: () => "",
    }),
    createChat: builder.mutation({
      query: (data: string) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
