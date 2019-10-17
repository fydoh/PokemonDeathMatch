import React, { useEffect, useState } from 'react';
import Experiment, {
  When,
  UpdateFetchExperiment,
  Debugger
} from '@carvana/experiment';
import { fetchPokemon, fetchExperiment } from '../../services';
import {
  MainWrapper,
  Title,
  ContentWrapper,
  Button,
  ButtonWrapper
} from './Pokemon.styles';
import Loader from './Loader';
import Ring from './Ring';
import Card from './Card';

UpdateFetchExperiment(fetchExperiment);

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nav, setNav] = useState({ next: '', prev: '' });
  const [loading, setLoading] = useState(true);
  const [contenders, setContenders] = useState([]);

  const fetchData = async url => {
    const { results, next, prev } = await fetchPokemon(url);
    setPokemon(results);
    setNav({
      next,
      prev
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21');
  }, []);

  const navigateCards = direction => {
    setLoading(true);
    fetchData(nav[direction]);
  };

  const updateContenders = guy => {
    if (contenders.length >= 3) {
      return;
    }
    const isSelected = contenders.find(x => x.name === guy.name);
    if (isSelected) {
      const newContenders = contenders.filter(x => x.name !== guy.name);
      setContenders(newContenders);
    } else {
      setContenders([...contenders, guy]);
    }
  };

  const clearContenders = () => {
    setContenders([]);
  };

  return (
    <MainWrapper>
      <Title>Pokemon Death Match</Title>
      <Ring contenders={contenders} clear={clearContenders} />
      <Debugger />
      <Experiment
        name="battle-history"
        environment="development"
        identifier="meeee"
        defaultBucket="control"
      >
        <When bucket="control">
          <ContentWrapper>
            {pokemon.map(guy => (
              <Card
                guy={guy}
                update={updateContenders}
                key={guy.name}
                contenders={contenders}
              />
            ))}
            {loading && <Loader data-testid="loader" />}
          </ContentWrapper>
        </When>
        <When bucket="history">
          <ContentWrapper>
            {pokemon.map(guy => (
              <Card
                guy={guy}
                update={updateContenders}
                key={guy.name}
                contenders={contenders}
                showBattleHistory
              />
            ))}
            {loading && <Loader data-testid="loader" />}
          </ContentWrapper>
        </When>
      </Experiment>

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
    </MainWrapper>
  );
};

export default Pokemon;
