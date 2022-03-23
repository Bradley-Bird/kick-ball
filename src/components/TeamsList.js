import React from 'react';

function TeamsList({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <p key={team.id}>{team.name}</p>
      ))}
    </div>
  );
}

export default TeamsList;
