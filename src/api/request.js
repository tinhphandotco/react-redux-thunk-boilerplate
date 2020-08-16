import axios from 'axios';
import { API_URL } from 'config';

const axiosInstance = axios.create({
  baseURL: API_URL || 'http://localhost:3001/api/v1',
});

const request = (options = {}) => {
  if (options.headers) {
    axiosInstance.defaults.headers = {
      ...axiosInstance.defaults.headers,
      ...options.headers,
    };
  }

  return axiosInstance;
};

export default request;
