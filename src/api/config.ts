import { AxiosError } from 'axios';
import { messageError } from 'types/axios';

export const catchError = (error: AxiosError) => {
  console.error(
    `Could not fetch: ${
      (error.response?.data as messageError).message
    }. \nStatusText: ${error.response?.statusText}. \nStatus: ${
      error.response?.status
    }`
  );
};
