import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@carvana/tooltip';
import { PokemonCard, Check, HistoryIcon, Name } from './Card.styles';

const History = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

const Card = ({ update, guy, contenders, fightResults, showBattleHistory }) => {
  const { name, sprites } = guy;
  const isPokemonSelected = contenders.find(x => x.name === name);

  console.log({
    fightResults,
    name,
    res: fightResults.filter(x => x.winner === name || x.loser === name).length === 0
  });

  return (
    <PokemonCard onClick={() => update(guy)} data-testid="card">
      <Name>{name}</Name>
      <img src={sprites.front_default} alt={name} />
      {isPokemonSelected && <Check data-testid="checkmark" />}
      {showBattleHistory && (
        <History>
          <Tooltip>
            <Tooltip.HoverElement>
              <HistoryIcon height={20} width={20} />
            </Tooltip.HoverElement>
            <Tooltip.Content arrowPosition="left">
              {fightResults &&
                fightResults.filter(x => x.winner === name || x.loser === name).length === 0 &&
                <div>No fight results</div>
              }
              {fightResults &&
                fightResults.filter(x => x.winner === name || x.loser === name).length > 0 &&
                <div>Has fought</div>
              }
            </Tooltip.Content>
          </Tooltip>
        </History>
      )}
    </PokemonCard>
  );
};

Card.defaultProps = {
  contenders: [],
  update: f => f,
  fightResults: [],
  showBattleHistory: false
};

Card.propTypes = {
  update: PropTypes.func,
  guy: PropTypes.shape({}).isRequired,
  contenders: PropTypes.arrayOf(PropTypes.shape({})),
  fightResults: PropTypes.arrayOf(PropTypes.shape({})),
  showBattleHistory: PropTypes.bool
};

export default Card;
