import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PokemonCard, Name } from './Card.styles';

const StyledPokemonCard = styled.div`
  margin-left: 4px;
`;

const WinLossCard = ({ guy }) => {
  const { name, isWinner } = guy;
  // console.log({ guy });

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
