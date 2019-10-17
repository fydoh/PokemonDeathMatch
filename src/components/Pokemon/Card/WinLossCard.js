import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PokemonCard, Name } from './Card.styles';

const StyledPokemonCard = styled(PokemonCard)`
  min-height: 30px;
  min-width: 20px;
  font-size: 0.8em;
  color: ${p => (p.isWinner
    ? p.theme.carvana.green.primary
    : p.theme.carvana.red.primary)};

`;

const WinLossCard = ({ guy }) => {
  const { name, isWinner } = guy;
  console.log({ guy });

  return (
    <StyledPokemonCard isWinner={isWinner}>
      <Name>{name}</Name>
    </StyledPokemonCard>
  );
};

WinLossCard.propTypes = {
  guy: PropTypes.shape({}).isRequired
};

export default WinLossCard;
