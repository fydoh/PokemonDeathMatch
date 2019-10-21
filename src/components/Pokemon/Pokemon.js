import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services';
import {
  MainWrapper,
  Title,
  ContentWrapper } from './Pokemon.styles';
import Loader from './Loader';
import Ring from './Ring';
import Card from './Card';
import { Navigation } from './Navigation';

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
      <Navigation nav={nav} navigateCards={navigateCards} />
    </MainWrapper>
  );
};

export default Pokemon;
