import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import NavBar from './NavBar';
import { usePokemonContext } from '../Context/PokemonContext';

const PLP = () => {
  const { pokemons, fetchPokemons } = usePokemonContext();
  //console.log(pokemons)
  useEffect(() => {
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
