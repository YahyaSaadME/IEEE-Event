import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfH2tVkuDM_vuIpCDR90JKLpPO52zkmZi3kr7pzJ9dqR58nWvmZ8F8BtCKPPwjgFWE/exec'; // Replace with your Google Apps Script URL

const QR: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  // Capture and scan the QR code from the webcam feed
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context?.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
        if (imageData) {
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setScanResult(code.data); // Set the scanned email from QR code
          }
        }
      };
    }
  }, [webcamRef]);

  // Periodically scan the QR code from the webcam
  useEffect(() => {
    const interval = setInterval(capture, 1000); // Capture every second
    return () => clearInterval(interval);
  }, [capture]);

  const handleSubmit = async () => {
    if (!scanResult) return; // Only submit if QR code contains a result

    setLoading(true);
    try {
      const formData = new URLSearchParams();
      formData.append('email', scanResult);
      formData.append('check', 'true');

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        const resultText = await response.text();
        setResult(resultText);
      }
    } catch (error) {
      setResult('Error in processing the request.');
    } finally {
      setLoading(false);
    }
  };

  // Automatically submit when QR code is detected
  useEffect(() => {
    if (scanResult) {
      handleSubmit();
    }
  }, [scanResult]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">QR Code Email Scanner</h1>

      {/* Webcam for QR code scanning */}
      <div className="w-80 h-80 mb-6">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: 'environment' }}  // Access the back camera
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {scanResult && (
        <div className="text-green-600 font-semibold">
          Scanned Email: {scanResult}
        </div>
      )}

      {loading && <p className="text-blue-600">Processing...</p>}

      {result && (
        <div className="mt-4 p-4 bg-white rounded shadow-md text-black">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default QR;
