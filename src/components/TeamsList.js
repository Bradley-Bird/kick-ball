import React from 'react';
import { StyledList, StyledLink } from './styles/StyledContainer';

function TeamsList({ teams }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/kick.png`}></img>
      </div>
      <StyledList>
        {teams.map((team) => (
          <StyledLink key={team.id} to={`/teams/${team.id}`}>
            <p>{team.name}</p>
          </StyledLink>
        ))}
      </StyledList>
    </>
  );
}

export default TeamsList;
