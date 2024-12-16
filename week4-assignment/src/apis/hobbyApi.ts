import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';
import { MyHobbyResponse, OtherHobbyResponse } from '../types/types';

export const fetchMyHobby = async (token: string) => {
  const response: AxiosResponse<MyHobbyResponse> = await axiosInstance.get(
    '/user/my-hobby',
    { headers: { token } }
  );

  if (response.status === 200) {
    return response.data.result.hobby;
  }
  throw new Error('취미 정보를 가져오지 못했습니다.');
};

export const fetchOtherHobby = async (token: string, no: string) => {
  const response: AxiosResponse<OtherHobbyResponse> = await axiosInstance.get(
    `/user/${no}/hobby`,
    { headers: { token } }
  );

  if (response.status === 200) {
    return `${no}번 사용자의 취미: ${response.data.result.hobby}`;
  }
  throw new Error('취미 정보를 가져오지 못했습니다.');
};
