import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from '../actions/pokemonActions';

const PLP = () => {
  //const [pokemons, setPokemons] = useState([]);
  const apiURL = "https://pokeapi.co/api/v2/pokemon/";
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        dispatch(setPokemons(result.results));
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
