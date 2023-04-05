import { useState } from "react";
import {clearUserData} from "../services/util.js";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

           return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    const clearLocalStorage = () => {
        setState({});
        clearUserData();
    }

    return [
        state,
        setLocalStorageState,
        clearLocalStorage
    ];
};
