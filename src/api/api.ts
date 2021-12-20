import axios, { AxiosError } from 'axios';
import { messageError } from 'types/axios';
import { FeedPost } from 'types/feed';

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
      const [info, feed] = await Promise.all([
        instance.get(`user/info/${uniqueName}`),
        instance.get('trending/feed/?limit=6'),
      ]);

      // Проблема с получением информации о пользователе "Info"
      if (!info || 'code' in info) {
        throw new Error('Failed to get user information');
      }

      const posts = feed.data.map((obj) => ({
        cover: obj.covers.origin,
        video: obj.videoUrl,
        views: obj.playCount,
      }));

      return {
        followerCount: info.data.stats.followerCount,
        followingCount: info.data.stats.followingCount,
        heartCount: info.data.stats.heartCount,
        avatar: info.data.user.avatarLarger,
        nickName: info.data.user.nickname,
        description: info.data.user.signature,
        userName: info.data.user.uniqueId,
        verified: info.data.user.verified,
        bioLink: info.data.user.bioLink && info.data.user.bioLink.link,
        posts,
      };
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
