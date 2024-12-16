import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';
import { SignupData, LoginData, LoginResponse } from '../types/types';

export const signupApi = async (signupData: SignupData) => {
  const response = await axiosInstance.post('/user', {
    username: signupData.username,
    password: signupData.password,
    hobby: signupData.hobby,
  });
  return response;
};

export const loginApi = async (
  loginData: LoginData
): Promise<AxiosResponse<LoginResponse>> => {
  const response = await axiosInstance.post('/login', {
    username: loginData.username,
    password: loginData.password,
  });
  return response;
};