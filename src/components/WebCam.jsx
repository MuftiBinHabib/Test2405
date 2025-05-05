import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tmImage from '@teachablemachine/image';

const WebCam = () => {
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const [message, setMessage] = useState('');
  const modelURL = 'https://teachablemachine.withgoogle.com/models/2-e3bfKlu/model.json';
  const metadataURL = 'https://teachablemachine.withgoogle.com/models/2-e3bfKlu/metadata.json';

  const loadModel = async () => {
    modelRef.current = await tmImage.load(modelURL, metadataURL);
    console.log('Model loaded');
  };

  const predict = async () => {
    if (
      modelRef.current &&
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      const prediction = await modelRef.current.predict(webcamRef.current.video);
      console.log(prediction); // Debug log
      prediction.forEach(pred => {
        if (pred.probability > 0.7) { // Adjust threshold if needed
          if (pred.className === 'A') {
            setMessage('Sign: A 🤟');
          } else if (pred.className === 'B') {
            setMessage('Sign: B ✋');
          } else {
            setMessage('');
          }
        }
      });
    }
  };

  useEffect(() => {
    loadModel();
    const interval = setInterval(() => {
      predict();
    }, 1000); // Check every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
      />
      <p className="mt-4 text-xl">{message}</p>
    </div>
  );
};

export default WebCam;
