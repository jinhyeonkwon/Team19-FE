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

  const recordStop = async () => {
    if (audioRecorder) {
      audioRecorder.stopRecording(async () => {
        const audioBlob = audioRecorder.getBlob();

        // Blob을 서버로 전송
        const formData = new FormData();
        formData.append('file', audioBlob, 'example.wav');

        try {
          const response1_raw = await fetch(
            APIBase + '/analyze_voice_and_return_response_and_audio',
            {
              method: 'POST',
              body: formData,
            }
          );
          const response1_data = await response1_raw.json();
          console.log('response1:', response1_data);

          addChat({ text: response1_data.user_input_data, isMine: true });

          const response2 = await axiosInstance.get('/get_audio_data', {
            responseType: 'blob',
          });

          console.log('3번째 요청 시작!');
          const response3 = await axiosInstance.get(
            '/get_generated_image_data',
            {
              responseType: 'json',
            }
          );

          const response3_data = response3.data;

          console.log('response3_data:', response3_data);
          const path = response3_data.generated_image_path;
          addChat({
            text: response1_data.response_data,
            isMine: false,
            imagePath: path !== 'nono' ? APIBase + path : null,
          });

          console.log('Success:', response2);
          const responseAudioBlob = response2.data;
          const responseAudioUrl = URL.createObjectURL(responseAudioBlob);

          setAudioSrc(responseAudioUrl);
        } catch (error) {
          console.error('Error:', error);
        }
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
