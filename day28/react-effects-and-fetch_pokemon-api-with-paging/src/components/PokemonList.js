import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(initialUrl);
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  return (
    <main>
      <button type="button" onClick={() => prevUrl && loadPokemon(prevUrl)}>
        Previous Page
      </button>
      <button type="button" onClick={() => nextUrl && loadPokemon(nextUrl)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
