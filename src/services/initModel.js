import axiosInstance from './axiosInstance';

export const initModel = async (num) => {
  try {
    const response = await axiosInstance.get(
      `/init_model/2`,
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
