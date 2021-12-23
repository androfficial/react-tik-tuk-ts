import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST as string,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY as string,
  },
});
