import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import './pokemon.scss';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0');
  const [nextUrl, setNextUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const queryApi = async () => {
      await axios.get(url).then((res) => {
        setPokemons([...pokemons, ...res.data.results]);
        setNextUrl(res.data.next);
        setIsLoading(false);
      });
    };
    queryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const pokemonsMap = pokemons.map((pokemon) => {
    const url = pokemon.url.split('/');
    const id = url[url.length - 2];
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return <Pokemon pokemon={pokemon} image={urlImage} key={id} />;
  });

  return (
    <div className="container text-center">
      <div className="poke-container py-5">{pokemonsMap}</div>
      {isLoading ? (
        <div className="spinner-border text-warning text-center my-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <button
          className="bt btn mb-4 text-white text-uppercase"
          onClick={() => {
            setUrl(nextUrl);
          }}
        >
          load more
        </button>
      )}
    </div>
  );
}
