import axios, { AxiosError } from 'axios';
import { messageError } from 'types/axios';
import { FeedPost } from 'types/feed';
import { UserProfileInfo } from 'types/userProfile';

const instance = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
});

const mainAPI = {
  async getPosts() {
    try {
      const { data } = await instance.get<FeedPost[]>(
        'trending/feed/?limit=10'
      );

      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        console.error(
          `Could not fetch: ${
            (error.response?.data as messageError).message
          }. \nStatusText: ${error.response?.statusText}. \nStatus: ${
            error.response?.status
          }`
        );
        return false;
      }
      console.error(error);
      return false;
    }
  },
  async getUserInfo(uniqueName: string) {
    try {
      const { data } = await instance.get<UserProfileInfo>(
        `user/info/${uniqueName}`
      );

      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        console.error(
          `Could not fetch: ${
            (error.response?.data as messageError).message
          }. \nStatusText: ${error.response?.statusText}. \nStatus: ${
            error.response?.status
          }`
        );
        return false;
      }
      console.error(error);
      return false;
    }
  },
  async getUserPosts() {
    try {
      const { data } = await instance.get<FeedPost[]>('trending/feed/?limit=6');

      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        console.error(
          `Could not fetch: ${
            (error.response?.data as messageError).message
          }. \nStatusText: ${error.response?.statusText}. \nStatus: ${
            error.response?.status
          }`
        );
        return false;
      }
      console.error(error);
      return false;
    }
  },
};

export default mainAPI;
