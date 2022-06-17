import { client } from "./client";

export const getMoviesList = async ({ searchValue }) => {
  try {
    const response = await client.get("/", {
      params: {
        s: searchValue,
      },
    });
    const { data } = response;
    if (data.Response === "True") {
      return data.Search;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
