import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE, // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': '*', // CORS 헤더 설정
    // 필요에 따라 다른 헤더 설정
  },
  // 필요에 따라 다른 설정 추가
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
  config.headers['Pragma'] = 'no-cache';
  config.headers['Expires'] = '0';
  return config;
});

export default axiosInstance;
