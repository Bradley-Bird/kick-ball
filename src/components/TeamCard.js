import { Link } from 'react-router-dom';

function TeamCard({ teamInfo, teamInfo: { players } }) {
  return (
    <div>
      <h2>{teamInfo.name}</h2>
      {players.map((player) => (
        <Link key={player.id} to={`/players/${player.id}`}>
          <p>
            {player.position}: {player.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default TeamCard;
