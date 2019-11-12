import React, { useState } from 'react';
import FightResultsContext from './FightResultsContext';

const FightResultsProvider = ({ children }) => {
  const [fightResults, setFightResults] = useState([]);

  const defaultContext = {
    fightResults,
    setFightResults
  };

  return (
    <FightResultsContext.Provider value={defaultContext}>
      {children}
    </FightResultsContext.Provider>
  );
};

export default FightResultsProvider;
