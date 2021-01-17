import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PokemonDetails from './PokemonDetails';
import ArrowDown from '../images/arrowDown.svg';
import './details.scss';

export default function Details(props) {
  const [data, setData] = useState([]);
  const [showAbilities, setShowAbilities] = useState(false);
  let { name } = useParams();
  useEffect(() => {
    const queryApi = async () => {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then((res) => {
        setData(res.data);
      });
    };
    queryApi();
  }, [name]);

  const { abilities, stats, types, sprites } = data;

  return (
    <div className="container">
      <div className="row p-5 ">
        <div className="m-auto shadow-lg" style={{ border: '5px solid #3c5aa6', backgroundColor: '#3c5aa6' }}>
          <div className="text-center p-2" style={{ backgroundColor: '#ffcb05' }}>
            {sprites?.other['official-artwork'].front_default ? (
              <img
                className="img-fluid"
                src={sprites?.other['official-artwork'].front_default}
                alt={name}
                width="300"
              />
            ) : (
              <img className="img-fluid" src={sprites?.front_default} alt={name} width="300" />
            )}
            <PokemonDetails.Types types={types} />
          </div>
          <div className="p-0 text-white">
            <h2 className="text-center text-uppercase bg-danger m-0">{name}</h2>
            <PokemonDetails.Stats stats={stats} />
          </div>
          <div
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setShowAbilities(!showAbilities)}
            className="text-uppercase text-white bg-secondary p-1 px-3 border border-dark d-flex justify-content-between"
          >
            <div>
              <img
                className={`mb-1 spin ${showAbilities ? 'clicked' : ''}`}
                src={ArrowDown}
                alt="arrow"
                width="20"
              />
              <span className="ml-2">Abilities</span>
            </div>
          </div>
          <div className="collapse" id="collapseExample">
            <PokemonDetails.Abilities abilities={abilities} />
          </div>
        </div>
      </div>
    </div>
  );
}
