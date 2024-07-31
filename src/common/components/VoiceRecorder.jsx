import React, { useState, useEffect } from 'react';

import RecordRTC, { StereoAudioRecorder } from 'recordrtc';

import axiosInstance from '../../services/axiosInstance.js';

import APIBase from '../../services/APIBase.js';

const VoiceRecorder = ({ setAudioSrc, addChat }) => {
  const [audioRecorder, setAudioRecorder] = useState(null);

  const start = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/wav',
          recorderType: StereoAudioRecorder,
          numberOfAudioChannels: 1,
          desiredSampRate: 16000,
          bufferSize: 16384,
        });

        recorder.startRecording();
        setAudioRecorder(recorder);
      })
      .catch((error) => {
        console.error('getUserMedia error:', error);
      });
  };

  const recordStop = () => {
    if (audioRecorder) {
      audioRecorder.stopRecording(() => {
        const audioBlob = audioRecorder.getBlob();

        // Blob을 서버로 전송
        const formData = new FormData();
        formData.append('file', audioBlob, 'example.wav');

        fetch(APIBase + '/analyze_voice_and_return_response_and_audio', {
          method: 'POST',
          body: formData,
        })
          .then((response1_raw) => {
            return response1_raw.json();
          })
          .then((response1_data) => {
            console.log('2번째 요청');
            console.log('response1:');
            console.log(response1_data);
            addChat({ text: response1_data.user_input_data, isMine: true });
            return axiosInstance
              .get('/get_audio_data', {
                // headers: {
                //   'Content-Type': 'multipart/form-data',
                // },
                responseType: 'blob', // 응답을 Blob으로 받기
              })
              .then((response2) => {
                addChat({ text: response1_data.response_data, isMine: false });
                return { response2: response2 };
              });
          })
          .then(({ response2 }) => {
            console.log('Success:', response2);
            const responseAudioBlob = response2.data;
            const responseAudioUrl = URL.createObjectURL(responseAudioBlob);

            setAudioSrc(responseAudioUrl);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    }
  };

  return (
    <div>
      <button onClick={start}>시작</button>
      <button onClick={recordStop}>중지</button>
    </div>
  );
};

export default VoiceRecorder;
