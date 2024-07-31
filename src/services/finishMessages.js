import axiosInstance from './axiosInstance';

export const finishMessages = async () => {
  try {
    const response = await axiosInstance.get('/finish_messages');
    return response.status;
  } catch (err) {
    console.error('Error finishing messages', err);
  }
};