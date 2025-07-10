import PokemonGrid from "@/components/PokemonGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favorite Pokémon',
  description: 'A page of favorite Pokémon',
};

export default async function PokemonsPage() {

  return (
    <>
      <div className="flex flex-col">
        <span className="text-center text-5xl my-2" >
          Pokémons Favoritos <small className="text-blue-500" >Global state</small>
        </span>
      </div>

      <PokemonGrid pokemons={[]} />

    </>
  );
}
