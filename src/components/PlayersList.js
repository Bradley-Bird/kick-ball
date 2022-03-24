import React from 'react';

function PlayersList({ players }) {
  return (
    <div>
      {players?.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
    </div>
  );
}

export default PlayersList;
