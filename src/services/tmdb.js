import axios from 'axios';

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
};
