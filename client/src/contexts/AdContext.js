import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createCard, getSevenLatest } from "../services/cardsServise";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const { clearLocalStorage } = useLocalStorage();

  const navigate = useNavigate();
  const [sevenCards, setCards] = useState([]);
  const [cardsAll, setAllCards] = useState([]);

  useEffect(() => {
    getSevenLatest()
      .then((result) => {
        setCards(result.slice(0, 7));
        console.log(sevenCards);
      })
      .catch((err) => {
        getSevenLatest().then((result) => {
          setCards(result.slice(0, 7));
        console.log(sevenCards);
          clearLocalStorage();
        });
      });
  }, [clearLocalStorage]);

  useEffect(() => {
    getSevenLatest().then((result) => {
      setAllCards(result);
    });
  }, []);

  const onCreateAdSubmit = async (data) => {
    const newAd = await createCard(data);

    setCards((state) => [...state, newAd]);

    navigate("/mypage");
  };

  const getMyCards = async (userId) => {
    const responce = await getSevenLatest();
    return responce.filter((c) => c._ownerId === userId);
  };

  const contextValues = {
    sevenCards,
    cardsAll,
    onCreateAdSubmit,
    getMyCards,
  };

  return (
    <AdContext.Provider value={contextValues}>{children}</AdContext.Provider>
  );
};

export const useAdContext = () => {
  const context = useContext(AdContext);

  return context;
};
