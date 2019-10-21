import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import {
  WinsLossesWrapper,
  WinsLossesLine,
  Win,
  Loss,
  Outcome
} from './Card.styles';
import WinLossCard from './WinLossCard';

const WinsLosses = props => (
  <WinsLossesWrapper>
    {props.fightResults
      .filter(x => x.winner === props.name || x.loser === props.name)
      .map(y => {
        const isWinner = y.winner === props.name;
        return (
          <WinsLossesLine key={`W_L_${uuid()}`}>
            <Outcome>{isWinner ? <Win data-testid={`win-${props.name}`}>W</Win> : <Loss>L</Loss>}</Outcome>
            vs.
            <WinLossCard
              guy={{
                name: isWinner ? y.loser : y.winner,
                isWinner: !isWinner
              }}
            />
          </WinsLossesLine>
        );
      })}
  </WinsLossesWrapper>
);

WinsLosses.propTypes = {
  name: PropTypes.string.isRequired,
  fightResults: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default WinsLosses;
