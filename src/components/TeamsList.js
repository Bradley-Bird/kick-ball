import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledList = styled.div``;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;

  p {
    position: relative;
    top: 5rem;
    color: Black;
  }
`;
export default TeamsList;
