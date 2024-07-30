import axiosInstance from './axiosInstance';

export const analyzeImage = (imgSrc) => {
  return fetch(imgSrc)
    .then((response) => response.blob())
    .then((blob) => {
      const file = new File([blob], 'file.png', { type: 'image/png' });
      const formData = new FormData();
      formData.append('file', file);

      return axiosInstance.post(
        '/analyze_image_and_return_response_and_audio',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    })
    .then((response1) => {
      console.log('2번째 요청');
      return axiosInstance
        .get('/analyze_image_and_return_response_and_audio_2', {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob', // 응답을 Blob으로 받기
        })
        .then((response2) => {
          return { response1: response1, response2: response2 };
        });
    })
    .catch((err) => {
      throw err;
    });
};