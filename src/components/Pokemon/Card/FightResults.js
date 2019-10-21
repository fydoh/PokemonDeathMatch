import React from 'react';
import PropTypes from 'prop-types';
import Experiment, { When } from '@carvana/experiment';
import WinsLosses from './WinsLosses';

const FightResults = ({ name, fightResults }) => (
  <Experiment
    name="win-loss-list"
    environment="development"
    identifier="meeee"
    defaultBucket="control"
  >
    <When bucket="control">
      <div>Has fought</div>
    </When>
    <When bucket="showem">
      <WinsLosses name={name} fightResults={fightResults} />{' '}
    </When>
  </Experiment>
);

FightResults.propTypes = {
  name: PropTypes.string.isRequired,
  fightResults: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default FightResults;
