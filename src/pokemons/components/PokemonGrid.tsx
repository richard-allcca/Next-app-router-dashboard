import type { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import PokemonCard from './PokemonCard';

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: PokemonGridProps) {

  const renderPokemons = (pokemons: SimplePokemon[]) => {
    if (pokemons.length === 0) return null;

    return pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ));
  };

  return (
    <div className="flex flex-wrap gap-6 p-4">
      {renderPokemons(pokemons)}
    </div>
  );
}
