import axios from "axios";

console.log("envv : ", process.env.API_BASE_URL_DEVELOPMENT);

const api: any = axios.create({
  baseURL: "http://localhost:8000", //process.env.API_BASE_URL_DEVELOPMENT,
  withCredentials: true,
});

//  change axios instance baseUrl for production mode
if (process.env.NODE_ENV === "production") {
  api.baseURL = "http://localhost:8000"; //process.env.API_BASE_URL_PRODUCTION;
}

export default api;
