import React, { useEffect, useState } from 'react';
import Experiment, { When } from '@carvana/experiment';
import Ring from './Ring';

const RingExperiment = props => (
  <Experiment
    name="battle-history"
    environment="development"
    identifier="meeee"
    defaultBucket="control"
  >
    <When bucket="control">
      <Ring contenders={props.contenders} clear={props.clearContenders} />
    </When>
    <When bucket="history">
      <Ring
        contenders={props.contenders}
        clear={props.clearContenders}
        setFightResults={props.setFightResults}
      />
    </When>
  </Experiment>
);

export default RingExperiment;
