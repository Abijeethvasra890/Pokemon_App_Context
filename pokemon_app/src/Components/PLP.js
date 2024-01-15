// PLP.js
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import NavBar from './NavBar';

const PLP = () => {
  const [pokemons, setPokemons] = useState([]);
  const apiURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        setPokemons(result.results);
      } catch (err) {
        console.error("Error Fetching Pokemons", err);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
    <NavBar/>
    <div className="plp-container">
      <h1>Pokemons</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} data={pokemon} id={index + 1} />
        ))}
      </div>
    </div>
    </>
  );
};

export default PLP;
