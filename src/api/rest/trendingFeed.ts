import { instance } from 'api/api';
import axios, { AxiosError } from 'axios';
import { FeedPost } from 'types/feed';

import { catchError } from '../config';

export const getPosts = async (limit = 6) => {
  try {
    const { data } = await instance.get<FeedPost[]>(
      `trending/feed/?limit=${limit}`
    );

    return data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      catchError(error);
      return false;
    }
    console.error(error);
    return false;
  }
};
