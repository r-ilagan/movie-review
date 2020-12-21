import axios from 'axios';

export const searchForMovies = async (query) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SEARCH}${query}`);
    const movies = response.data;
    return movies;
  } catch (error) {
    console.log(error);
  }
};
