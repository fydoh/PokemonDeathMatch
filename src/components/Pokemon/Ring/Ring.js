import React, { useState, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import Fighter from '../Fighter';
import {
  Ring,
  FightButton,
  ClearButton,
  FightButtonWrapper,
  WinnerName
} from './Ring.styles';
import FightLogic from './FightLogic';
import FightResultsContext from '../FightResultsContext';

const initialState = {
  fightResults: []
};

/* Sample FightResult
  { winner: 'charmander', loser: 'pikachu', otherFighters: [] }
*/

const Fight = ({ contenders, clear }) => {
  const shouldShowClearButton = contenders.length > 0;
  const shouldShowFightButton = contenders.length >= 2;
  const [winner, useWinner] = useState('');
  const { setFightResults } = useContext(FightResultsContext);
  const [state, dispatch] = useReducer((currentState, action) => {
    // console.log({ currentState, action, contenders: action.payload.contenders });
    const fightResults = [...currentState.fightResults, ...action.payload.contenders.reduce((acc, x) => {
      // console.log({ x, acc, res: action.payload.fightResults });
      if (x.name !== action.payload.fightResults) {
        // console.log({ name: x.name });
        acc.push({
          winner: action.payload.fightResults,
          loser: x.name
        });
      }
      return acc;
    }, [])];

    setFightResults(fightResults);

    switch (action.type) {
    case 'SAVE_FIGHT_RESULT':
      return {
        fightResults
      };
    default:
      return state;
    }
  }, initialState);

  const fight = () => {
    const fightResults = FightLogic(contenders);
    useWinner(fightResults);
    dispatch({
      type: 'SAVE_FIGHT_RESULT',
      payload: {
        fightResults,
        contenders
      }
    });
  };

  return (
    <>
      {winner && (
        <WinnerName data-testid="winner">{winner} is the Champion!</WinnerName>
      )}
      <Ring data-testid="fight-ring">
        {contenders.length ? (
          contenders.map(guy => {
            return <Fighter guy={guy} key={guy.name} />;
          })
        ) : (
          <p data-testid="intro-text">Please select some dudes.</p>
        )}
      </Ring>
      <FightButtonWrapper>
        {shouldShowClearButton && (
          <ClearButton data-testid="clear-button" onClick={clear}>
            Clear
          </ClearButton>
        )}
        {shouldShowFightButton && (
          <FightButton data-testid="fight-button" onClick={fight}>
            Fight!
          </FightButton>
        )}
      </FightButtonWrapper>
    </>
  );
};

Fight.defaultProps = {
  clear: f => f,
};

Fight.propTypes = {
  contenders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clear: PropTypes.func.isRequired,
};

export default Fight;
