import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon
  };
}

// NOTE - This function is commented out because have problems with localStorage.
// const getInitialState = (): PokemonState => {
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// }

const initialState: PokemonState = {
  // ...getInitialState(),
  favorites: {}
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
    setFavorites: (state, action: PayloadAction<{[key: string]: SimplePokemon}>) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      // Update localStorage
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer