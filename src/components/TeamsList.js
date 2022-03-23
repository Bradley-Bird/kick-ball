import React from 'react';
import { Link } from 'react-router-dom';

function TeamsList({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <Link key={team.id} to={`/teams/${team.id}`}>
          <p>{team.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default TeamsList;
