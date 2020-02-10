import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

        // WITH AN IF LOOP AND SETTING initialValue IN LOCALSTORAGE
        // if (localStorage.getItem(key)) {
        //     return JSON.parse(localStorage.getItem(key));
        // } else {
        //     localStorage.setItem(key, JSON.stringify(initialValue));
        //     return initialValue;
        // }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setStoredValue];
};