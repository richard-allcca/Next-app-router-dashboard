import PokemonGrid from "@/pokemons/components/PokemonGrid";
import type { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pokémon List',
  description: 'A page of Pokémon list',
};

const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
      // next: { revalidate: 60 }, // Revalidate every 60 seconds
    }).then(res => res.json());

    const result = data.results.map(pokemon => {
      const id = pokemon.url.split('/').slice(-2)[0];
      return {
        id,
        name: pokemon.name,
      };
    });

    return result;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw new Error("No se pudo obtener la lista de Pokémon");

  }
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);

  if (!pokemons || pokemons.length === 0) {
    return <div>No se encontraron Pokémon</div>;
  }

  return (
    <>
      <div className="flex flex-col">
        <span className="text-center text-5xl my-2" >
          Listado de Pokémons <small className="text-blue-500" >estático</small>
        </span>
      </div>

      <PokemonGrid pokemons={pokemons} />

    </>
  );
}