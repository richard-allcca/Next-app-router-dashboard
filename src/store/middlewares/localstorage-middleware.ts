import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";


export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    // Call the next middleware in the chain
    // or the reducer if this is the last middleware
    next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      // Update localStorage with the current state of favorite pokemons
      const { pokemons } = state.getState();
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
    }
  };
}