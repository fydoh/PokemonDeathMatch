import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@carvana/theme';
import WinsLosses from './WinsLosses';

const debugElement = element => {
  console.log(element.outerHTML);
};

describe('WinsLosses', () => {
  const fightResults = [{
    winner: 'charmander',
    loser: 'charmeleon'
  }, {
    winner: 'charizard',
    loser: 'charmander'
  }];

  const renderWinsLosses = (props = {}) => render(
    <ThemeProvider>
      <WinsLosses {...props} />
    </ThemeProvider>
  );

  it('Should render winner when name matches', () => {
    const { queryByTestId } = renderWinsLosses({
      name: 'charmander',
      fightResults
    });

    expect(queryByTestId('win-charmander')).toBeTruthy();
  });

  // it('Should show checkmark when selected by a user', () => {
  //   const { queryByTestId } = renderCard({ guy, contenders });

  //   expect(queryByTestId('checkmark')).toBeTruthy();
  // });

  // it('Should not show checkmark when not selected by a user', () => {
  //   const { queryByTestId } = renderCard({
  //     guy: {
  //       name: 'charmander',
  //       sprites: { front_default: '' }
  //     },
  //     contenders
  //   });
  //   expect(queryByTestId('checkmark')).toBeNull();
  // });
});
