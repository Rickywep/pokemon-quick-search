import hp from '../images/hp.svg';
import def from '../images/def.svg';
import att from '../images/att.svg';

const typesColor = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#eab209',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  unknown: 'black',
  shadow: 'black',
};
export const getTypesColor = (stat) => typesColor[stat];

const statsColor = {
  hp: '#5cb329',
  attack: '#ee5330',
  defense: ' #2a75bb',
};
export const getStatsColor = (stat) => statsColor[stat];

const statsIcon = {
  hp: hp,
  attack: att,
  defense: def,
};
export const getStatsIcon = (stat) => statsIcon[stat];
