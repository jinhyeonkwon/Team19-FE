import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE, // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    // 필요에 따라 다른 헤더 설정
  },
  // 필요에 따라 다른 설정 추가
});

export default axiosInstance;
