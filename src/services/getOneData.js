import axiosInstance from './axiosInstance';

export const getOneData = async (num) => {
  try {
    const response = await axiosInstance.get(
      `/get_one_data/data_${num}`,
      {},
      {
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error('Error getting one data', err);
  }
};
