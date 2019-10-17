import axios from 'axios';

export const fetchExperiment = exp => (
  new Promise(resolve => {
    console.log({ exp });
    return resolve({
      assignedBucket: 'control',
      experimentName: 'battle-history'
    });
  })
);

export const fetchPokemonData = name => {
  return axios({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${name}`
  }).then(res => res.data);
};

export const fetchPokemon = url => {
  return axios({
    method: 'GET',
    url
  }).then(res => {
    const { results, next, previous: prev } = res.data;
    return Promise.all(
      results.map(({ name }) => {
        return fetchPokemonData(name);
      })
    ).then(pokemon => {
      return {
        results: pokemon,
        next,
        prev
      };
    });
  });
};
