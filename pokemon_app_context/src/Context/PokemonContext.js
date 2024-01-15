import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemons = async () => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon/";

    try {
      const response = await fetch(apiURL);
      const result = await response.json();
      setPokemons(result.results);
    } catch (err) {
      console.error("Error Fetching Pokemons", err);
    }
  };

  const fetchPokemonData = async (id) => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try {
      const response = await fetch(apiURL);
      const result = await response.json();
      setPokemonData(result);
    } catch (err) {
      console.error("Error Fetching Pokemon", err);
    }
  };

 
  return (
    <PokemonContext.Provider value={{ pokemons,fetchPokemons, fetchPokemonData, pokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
