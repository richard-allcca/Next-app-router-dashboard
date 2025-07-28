'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { toggleFavorite } from '@/store/pokemons/pokemons';

interface Props {
  pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  }

  const renderedImage = () => {
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Image
        src={urlImage}
        alt={name}
        width={100}
        height={100}
        priority={false}
      />
    );
  };

  const renderedHeartIcon = () => {
    return isFavorite
      ? <IoHeart />
      : <IoHeartOutline />;
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">

      <div className="bg-white rounded overflow-hidden shadow-lg">

        {/* Card top */}

        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          {renderedImage()}
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>

        {/* Card bottom */}

        <div
          className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={onToggleFavorite}
        >
          <div className="text-red-600">
            {/* <IoHeartOutline className="w-5 h-5" /> */}
            {renderedHeartIcon()}
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {isFavorite ? 'Is favorites' : 'Not favorites'}
            </p>
            <p className="text-xs text-gray-500">View your campaigns</p>
          </div>
        </div>

      </div>

    </div>
  );
}
