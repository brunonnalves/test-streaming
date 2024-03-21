import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
  },
});

const Rest = {
  get: async (url: string, config: AxiosRequestConfig<any> | undefined) => {
    const response = await axiosInstance.get(url, config);

    return handleResponse(response);
  },
};

const handleResponse = (response: AxiosResponse) => ({
  data: response.data,
  status: response.status,
});

export default Rest;
