const initialState = {
    pokemons: [],
    pokemonData: null,
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POKEMONS':
        return { ...state, pokemons: action.payload };
      case 'SET_POKEMON_DATA':
        return { ...state, pokemonData: action.payload };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  