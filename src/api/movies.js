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

export const getMovieDetails = async ({ id }) => {
  try {
    const response = await client.get("/", {
      params: {
        i: id,
        plot: "full",
      },
    });
    const { data } = response;
    if (data.Response === "True") {
      return data;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
  }
};
