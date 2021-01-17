import { getTypesColor, getStatsIcon, getStatsColor } from '../utils/utils';

function Abilities({ abilities }) {
  const abilitiesMap = abilities?.map((ability, i) => (
    <tr key={i}>
      <td>
        <span className="p-2 ml-2">{`- ${ability.ability.name}`}</span>
      </td>
    </tr>
  ));
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-sm">
        <tbody>{abilitiesMap}</tbody>
      </table>
    </div>
  );
}
function Types({ types }) {
  const typesMap = types?.map((type, i) => (
    <h5 key={i} className="d-inline-block">
      <span
        className="badge badge-pill text-white m-2"
        style={{ backgroundColor: getTypesColor(`${type.type.name}`), border: '2px solid #545b62' }}
      >
        {type.type.name}
      </span>
    </h5>
  ));
  return <div>{typesMap}</div>;
}
function Stats({ stats }) {

  const statsMap = stats?.slice(0, 3).map((stat, i) => (
    <div
      key={i}
      className="text-uppercase text-white p-1 px-3 border border-dark d-flex justify-content-between"
      style={{ backgroundColor: getStatsColor(`${stat.stat.name}`) }}
    >
      <div>
        <img src={getStatsIcon(`${stat.stat.name}`)} alt="stat.stat.name" className="img-fluid" width="20" />
        <span className="ml-2">{stat.stat.name}</span>
      </div>
      <span>{stat.base_stat}</span>
    </div>
  ));
  return <div>{statsMap}</div>;
}

const PokemonDetails = {
  Abilities,
  Types,
  Stats,
};
export default PokemonDetails;
