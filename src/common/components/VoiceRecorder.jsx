import React, { useState, useEffect } from 'react';

import RecordRTC, { StereoAudioRecorder } from 'recordrtc';

import axiosInstance from '../../services/axiosInstance.js';

import APIBase from '../../services/APIBase.js';

const VoiceRecorder = ({ setAudioSrc }) => {
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
        console.log('audioBlob 구했음');
        // Blob을 서버로 전송
        const formData = new FormData();
        formData.append('file', audioBlob, 'example.wav');
        console.log('formData에 넣었음');

        fetch(APIBase + '/analyze_voice_and_return_response_and_audio', {
          method: 'POST',
          body: formData,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((response1) => {
            console.log('2번째 요청 시작');
            return axiosInstance
              .post('/get_audio_data', {
                // 원래 get 이었음
                // headers: {
                //   'Content-Type': 'multipart/form-data',
                // },
                responseType: 'blob', // 응답을 Blob으로 받기
              })
              .then((response2) => {
                console.log('2번째 요청 끝');
                return { response1: response1, response2: response2 };
              });
          })
          .then(({ response1, response2 }) => {
            console.log('Success:', response2.data);
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
