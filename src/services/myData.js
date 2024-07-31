import axiosInstance from './axiosInstance';

export const myData = async (num) => {
  try {
    const response = await axiosInstance.get(
      `/my_data`,
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
