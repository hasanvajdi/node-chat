import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";



export const privateBaseQuery = (restOfUrl: string) => {
  const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT
    : process.env.REACT_APP_API_BASE_URL_PRODUCTION;
  
  const cookie = new Cookies();

  return fetchBaseQuery({
    baseUrl: baseUrl + restOfUrl,
    prepareHeaders: (headers) => {
      const token = cookie.get("access");
      headers.set("authorization", `Bearer ${token}`);
    },
  });
};

export const publicBaseQuery = (restOfUrl: string) => {
  const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT
    : process.env.REACT_APP_API_BASE_URL_PRODUCTION;
  
  return fetchBaseQuery({
    baseUrl: baseUrl + restOfUrl,
  });
};
