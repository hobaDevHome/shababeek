import React, { useState, useContext, useEffect } from 'react';
import { windosInfo, reviews } from '../data';

const InfoContext = React.createContext();

const InfotProvider = ({ children }) => {
  const [info, setInfo] = useState(windosInfo);
  const [reviewsData, setreviews] = useState(reviews);

  return (
    <InfoContext.Provider value={{ info, reviewsData }}>
      {children}
    </InfoContext.Provider>
  );
};
const InfoConsumer = InfoContext.Consumer;

export const useGlobalContext = () => {
  return useContext(InfoContext);
};
export { InfotProvider, InfoContext, InfoConsumer };
