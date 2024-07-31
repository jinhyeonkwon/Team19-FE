import axiosInstance from './axiosInstance';

export const getAllData = async (num) => {
  try {
    const response = await axiosInstance.get(`/get_all_data`);
    return response.data;
  } catch (err) {
    console.error('Error getting one data', err);
  }
};
