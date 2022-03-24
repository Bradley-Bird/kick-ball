import React from 'react';
import { Link } from 'react-router-dom';

function PlayerCard({ player, player: { teams } }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>{player.position}</p>
      <Link to={`/teams/${teams.id}`}>
        <p>{teams.name}</p>
      </Link>
    </div>
  );
}

export default PlayerCard;
