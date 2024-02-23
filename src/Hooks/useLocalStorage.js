import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : initialValue;
    });

    const saveData = (data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            setStoredValue(data);
        } catch (error) {
            console.error('Error Saving to localStorage', error);
        }
    }

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