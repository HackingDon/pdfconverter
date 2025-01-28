import React, { useState } from "react";
import QRCode from "qrcode";
import CryptoJS from "crypto-js";

const PasswordProtectedQRCode = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");
  const [scannedData, setScannedData] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const encryptData = (data, password) => {
    return CryptoJS.AES.encrypt(data, password).toString();
  };

  const decryptData = (encryptedData, password) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, password);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return "Invalid password or corrupted data!";
    }
  };

  const generateQRCode = async () => {
    if (!text || !password) {
      alert("Please enter text and password!");
      return;
    }
    const encryptedText = encryptData(text, password);
    const qrCodeURL = await QRCode.toDataURL(encryptedText);
    setQrCodeData(qrCodeURL);
  };

  const handleDecrypt = () => {
    const decryptedText = decryptData(scannedData, inputPassword);
    alert(`Decrypted Data: ${decryptedText}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Password-Protected QR Code</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter text to encrypt"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={generateQRCode}
          className="bg-blue-500 text-white p-2 mt-2 rounded"
        >
          Generate QR Code
        </button>
      </div>

      {qrCodeData && (
        <div className="mb-4">
          <h2 className="font-semibold">Your QR Code:</h2>
          <img src={qrCodeData} alt="QR Code" />
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Scanned QR Code Data"
          value={scannedData}
          onChange={(e) => setScannedData(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Enter password to decrypt"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={handleDecrypt}
          className="bg-green-500 text-white p-2 mt-2 rounded"
        >
          Decrypt Data
        </button>
      </div>
    </div>
  );
};

export default PasswordProtectedQRCode;
