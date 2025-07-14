/*
    Get and set values in user browser localStorage.
*/
import { useState, useEffect } from "react";

export default function useLocalStorage( key, initialValue ) {

    const [value, setValue] = useState(() => {

        // https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue];
}
