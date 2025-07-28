import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites;
}

const initialState: PokemonState = {
  ...getInitialState(),
  // Example initial state, can be removed or modified as needed
    //   '1': {
    //   id: '1',
    //   name: 'Bulbasaur'
    // },
    // '5': {
    //   id: '5',
    //   name: 'charmeleon',
    // },
    // '7': {
    //   id: '7',
    //   name: 'squirtle',
    // },
    // '8': {
    //   id: '8',
    //   name: 'wartortle',
    // }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon
      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }
      // Update localStorage
      localStorage.setItem('favorite-pokemons', JSON.stringify(state));
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer