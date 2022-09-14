import Pokedex from "./pokedex";
import pokemon, {POKEMON_IMG_API} from "./pokemonList";

function App() {
  return (
    <>
      <Pokedex pokemon={pokemon} imgUrl={POKEMON_IMG_API}/>
    </>
  );
}

export default App;
