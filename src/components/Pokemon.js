import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.scss';

export default function Pokemon({ pokemon, image }) {
  const { name } = pokemon;
  return (
    <div className="b-game-card">
      <Link to={`/details/${name}`}>
        <div className="b-game-card__cover">
          <img className="img-fluid p-3" src={image} alt={name} />
          <p className="text-uppercase font-weight-bold">{name}</p>
        </div>
      </Link>
    </div>
  );
}
