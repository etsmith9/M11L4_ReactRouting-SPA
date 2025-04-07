import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Pokémon:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Pokémon...</p>;

  return (
    <div>
      <h2>Browse Pokémon</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/character/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
