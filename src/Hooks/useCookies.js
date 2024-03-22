import Cookies from 'js-cookie';
import { useState } from 'react';

const useCookies = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = Cookies.get(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });

  const saveData = (data) => {
    try {
      Cookies.set(key, JSON.stringify(data), { expires: 365 }); // Set a long expiration date
      setStoredValue(data);
    } catch (error) {
      console.error('Error Saving to cookies', error);
    }
  };

  const clearData = () => {
    try {
      Cookies.remove(key);
      setStoredValue(null);
    } catch (error) {
      console.error('Error clearing cookis', error);
    }
  };

  return [storedValue, saveData, clearData];
};

export default useCookies;
