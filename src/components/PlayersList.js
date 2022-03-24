import { Link } from 'react-router-dom';

function PlayersList({ players }) {
  return (
    <div>
      {players.map((player) => (
        <Link key={player.id} to={`/player/${player.id}`}>
          <p>{player.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default PlayersList;
