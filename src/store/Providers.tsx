'use client';

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setFavorites } from "./pokemons/pokemons";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {

  useEffect(() => {
    const favorites = localStorage.getItem('favorite-pokemons') ?? '{}';
    store.dispatch(setFavorites(JSON.parse(favorites)));
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};