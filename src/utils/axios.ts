import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = () => {
  const instance = axios?.create({
    baseURL: process.env.NEXT_PUBLIC_BACK_URI,
  });

  instance.interceptors.request.use(async (config) => {
    const session = await getSession();

    config.headers.Authorization = session ? `Bearer ${session.token}` : '';

    return config;
  });

  return instance;
};

export default axiosInstance();
