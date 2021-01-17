import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as JsSearch from 'js-search';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useHistory } from 'react-router-dom';

const db = new JsSearch.Search('url');
db.searchIndex = new JsSearch.UnorderedSearchIndex();
db.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
db.addIndex('name');

export default function SearchPokemon() {
  const history = useHistory();
  const ref = useRef();
  const [pokemons, setPokemons] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);
  useEffect(() => {
    const queryApi = async () => {
      await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200').then((res) => {
        setPokemons([...pokemons, ...res.data.results]);
        db.addDocuments(res.data.results);
      });
    };
    queryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearch = (value) => {
    const result = db.search(value);
    if (value === []) {
    }
    setSearchOptions(result);
  };

  const selectPokemon = (results) => {
    const pokemon = results[0];
    pokemon && history.push(`/details/${pokemon.name}`);
    ref.current.clear();
  };

  return (
    <div className="m-auto input-group" style={{ maxWidth: '400px' }}>
      <Typeahead
        id="pokemon_search"
        ref={ref}
        size="lg"
        labelKey="name"
        options={searchOptions}
        onChange={selectPokemon}
        placeholder="Search Pokémon"
        onInputChange={handleSearch}
        minLength={3}
      />
    </div>
  );
}
