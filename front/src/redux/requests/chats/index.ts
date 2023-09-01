import { createApi } from "@reduxjs/toolkit/dist/query/react";

//  base query
import { privateBaseQuery } from "..";
//  types and interfaces
import type { chatItemType } from "components/chats/chats/types";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: privateBaseQuery("/chats"),
  tagTypes: ["chats"],
  endpoints: (builder: any) => ({
    getChats: builder.query({
      query: () => "",
      providesTags: ["chats"],
    }),

    createChat: builder.mutation({
      query: (data: string) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["chats"],
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
