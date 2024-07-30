import axiosInstance from './axiosInstance';

export const analyzeAudio = (audioBlob) => {
  // 오디오 Blob을 File 객체로 변환
  const audioFile = new File([audioBlob], 'audio.mp3', { type: 'audio/mp3' });
  const formData = new FormData();
  formData.append('file', audioFile);

  // 첫 번째 요청: 오디오 파일을 서버로 보내서 텍스트 설명을 받음
  return axiosInstance
    .post('/analyze_voice_and_return_response_and_audio', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response1) => {
      console.log('2번째 요청');
      // 두 번째 요청: 텍스트 설명에 대한 오디오 파일을 요청
      return axiosInstance
        .get('/get_audio_data', {
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

export const audioTest = (audioBlob) => {
  const audioFile = new File([audioBlob], 'audio.mp3', { type: 'audio/mp3' });
  const formData = new FormData();
  formData.append('file', audioFile);

  return axiosInstance.post('/voice_test', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const audioTestAndSave = (blob) => {
  const formData = new FormData();
  formData.append('file', blob, 'audio.wav');

  axiosInstance
    .post('/voice_test', formData)
    .then((response) => response.json())
    .then((data) =>
      console.log('Success : ' + data).catch((err) => {
        console.log('Error : ' + err);
      })
    );

  // return axiosInstance
  //   .post('/voice_test', formData, {})
  //   .then((response) => {
  //     // Blob을 로컬 컴퓨터에 저장
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'test_audio.mp3');
  //     document.body.appendChild(link);
  //     link.click();
  //     link.parentNode.removeChild(link);
  //   })
  //   .catch((err) => {
  //     throw err;
  //   });
};
