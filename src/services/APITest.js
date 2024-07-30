import axiosInstance from './axiosInstance';

const APITest = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response;
  } catch (err) {
    throw err;
  }
};

export default APITest;
