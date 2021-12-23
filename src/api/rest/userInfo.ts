import { instance } from 'api/api';
import axios, { AxiosError } from 'axios';
import { UserProfileInfo } from 'types/userProfile';

import { catchError } from '../config';

export const getUserInfo = async (uniqueName: string) => {
  try {
    const { data } = await instance.get<UserProfileInfo>(
      `user/info/${uniqueName}`
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
