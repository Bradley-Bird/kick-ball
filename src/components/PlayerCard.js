import React from 'react';

function PlayerCard({ player, player: { teams } }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>{player.position}</p>
      <p>{teams.name}</p>
    </div>
  );
}

export default PlayerCard;
