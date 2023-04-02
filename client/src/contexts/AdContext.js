import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {createCard, getSevenLatest} from '../services/cardsServise';

export const AdContext = createContext();

export const AdProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [ads, setAds] = useState([]);
    useEffect(() => {
        getSevenLatest()
            .then(result => {
                setAds(result)
            })
    }, []);

    const onCreateAdSubmit = async (data) => {
        const newAd = await createCard(data);

        setAds(state => [...state, newAd]);

        navigate('/');
    };

    const contextValues = {
        ads,
        onCreateAdSubmit,
    };

    return (
        <AdContext.Provider value={contextValues}>
            {children}
        </AdContext.Provider>
    );
};

export const useAdContext = () => {
    const context = useContext(AdContext);

    return context;
};