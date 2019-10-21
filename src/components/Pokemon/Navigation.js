import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './Pokemon.styles';

export const Navigation = ({ nav, navigateCards }) => (
  <ButtonWrapper>
    <Button
      data-testid="prev-button"
      onClick={() => navigateCards('prev')}
      disabled={!nav.prev}
    >
      Prev
    </Button>
    <Button
      data-testid="next-button"
      onClick={() => navigateCards('next')}
      disabled={!nav.next}
    >
      Next
    </Button>
  </ButtonWrapper>
);

Navigation.propTypes = {
  nav: PropTypes.shape({}).isRequired,
  navigateCards: PropTypes.func.isRequired
};
