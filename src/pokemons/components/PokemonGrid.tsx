import type { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeartOutline } from 'react-icons/io5';

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: PokemonGridProps) {
  const renderedImage = (pokemon: SimplePokemon) => {
    const id = pokemon.url.split('/').slice(-2)[0];
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Image
        src={urlImage}
        alt={pokemon.name}
        width={100}
        height={100}
        priority={false}
      />
    );
  };

  return (
    <div className="flex flex-wrap gap-6 p-4">
      {/* component */}
      {
        pokemons.map((pokemon) => {
          return (
            <div key={pokemon.name} className="mx-auto right-0 mt-2 w-60">

              <div className="bg-white rounded overflow-hidden shadow-lg">

                {/* Card top */}

                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                  {renderedImage(pokemon)}
                  <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                  <div className="mt-5">
                    <Link
                      href={`/dashboard/pokemons/${pokemon.name}`}
                      className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                    >
                      Más información
                    </Link>
                  </div>
                </div>

                {/* Card bottom */}

                <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center">
                  <div className="text-red-600">
                    <IoHeartOutline className="w-5 h-5" />
                  </div>
                  <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      No es favorito1
                    </p>
                    <p className="text-xs text-gray-500">View your campaigns</p>
                  </div>
                </Link>

              </div>

            </div>
          );
        })
      }
    </div>
  );
}
