import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';
import { UpdateRequestData, InfoResponse } from '../types/types';

export const updateUserInfo = async (
  token: string,
  data: UpdateRequestData
): Promise<AxiosResponse<InfoResponse>> => {
  const response: AxiosResponse<InfoResponse> = await axiosInstance.put(
    '/user',
    data,
    { headers: { token } }
  );

  return response;
};
