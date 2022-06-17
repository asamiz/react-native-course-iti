import axios from "axios";

const baseURL = "http://www.omdbapi.com";
const apikey = "3c93bf24";

export const client = axios.create({
  baseURL,
  timeout: 60000,
});

client.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      type: "movie",
      apikey,
    },
  };
});

/*
  (response) => response,
  (error) => client.request(error.config)
*/
