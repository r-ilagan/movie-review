import axios from 'axios';

const searchBaseUrl = 'http://localhost:3001/api/v1/tmdb';

const SEARCH = {
  ALL: `${searchBaseUrl}/search?`,
};

export const multiSearch = async (query, mode = 'multi', page = 1) => {
  const params = new URLSearchParams({
    mode,
    query,
    page,
  });
  try {
    const response = await axios.get(`${SEARCH.ALL}${params}`);
    console.log('at tmdb file', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
