import { useState } from 'react';
import CryptoJS from 'crypto-js';

function useLocalStorage(key, initialValue, encrypt = false) {
  // Helper function to encrypt a value
  const encryptValue = (value) => {
    const stringValue = JSON.stringify(value);
    const encryptedValue = CryptoJS.AES.encrypt(stringValue, 'your_secret_key').toString();
    return encryptedValue;
  };

  // Helper function to decrypt a value
  const decrypt = (encryptedValue) => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, 'your_secret_key');
    const decryptedValue = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedValue;
  };

  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? (encrypt ? decrypt(storedItem) : JSON.parse(storedItem)) : initialValue;
  });

  const saveData = (data) => {
    try {
      const valueToStore = encrypt ? encryptValue(data) : JSON.stringify(data);
      localStorage.setItem(key, valueToStore);
      setStoredValue(data);
    } catch (error) {
      console.error('Error Saving to localStorage', error);
    }
  };

  const removeData = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  };

  return [storedValue, saveData, removeData];
}

export default useLocalStorage;
