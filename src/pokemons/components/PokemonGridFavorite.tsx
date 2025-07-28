'use client';

import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import PokemonGrid from './PokemonGrid';
import { useMemo } from 'react';

export const PokemonGridFavorite = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);

  // Memoize the list of favorite pokemons
  const newList = useMemo(() => Object.values(favorites), [favorites]);

  const renderPokemons = (pokemons: SimplePokemon[]) => {
    if (pokemons.length === 0) return <NoFavorites />;

    return (
      <div className="flex flex-wrap gap-6 p-4">
        <PokemonGrid pokemons={pokemons} />
      </div>
    );
  };

  return (
    <>
      { renderPokemons(newList) }
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] justify-center items-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-gray-400 text-2xl">No hay favoritos</span>
    </div>
  );
};
