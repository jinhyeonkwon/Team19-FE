import axiosInstance from '../axiosInstance';

export const APITest = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response;
  } catch (err) {
    throw err;
  }
};
