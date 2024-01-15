import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';


const PDP = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        console.log(result);
        console.log("fetched");
        setPokemonData(result);
      } catch (err) {
        console.error("Error Fetching Pokemon", err);
      }
    };

    fetchPokemonData();
  }, [apiURL]);

  return (
    <>
    <NavBar/>
    <div className="pdp-container">
      
      {pokemonData && (
        <div className="pokemon-details">
          <h1>Pokemon Details - {pokemonData.name}</h1>
          <img src={imageURL} alt={pokemonData.name} />
          <ul>
            <li>
              <p>
                <strong>Name:</strong> {pokemonData.name}
              </p>
            </li>
            <li>
              <h5>Abilities:</h5>
              <ul>
                {pokemonData.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <p>
                <strong>Base Experience:</strong> {pokemonData.base_experience}
              </p>
            </li>
            <li>
              <p>
                <strong>Height:</strong> {pokemonData.height}
              </p>
            </li>
            <li>
              <p>
                <strong>Weight:</strong> {pokemonData.weight}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default PDP;
