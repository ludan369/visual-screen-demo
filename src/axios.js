import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://apifoxmock.com/m1/5513653-0-default',
  timeout: 5000,
  headers: {
    apifoxToken: 'FYAbi94gPiTKKaWg5WZnS',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error('Response Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No Response Received:', error.request);
    } else {
      console.error('Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
