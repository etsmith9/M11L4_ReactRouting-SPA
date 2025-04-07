import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Linking a character to its ID as a route parameter

const CharacterDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type(s): {pokemon.types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
};

export default CharacterDetails;
