import React from 'react';
import { StyledLink, StyledList } from '../components/styles/StyledContainer';

function PlayerCard({ player, player: { teams } }) {
  return (
    <StyledList>
      <h2>{player.name}</h2>
      <p>{player.position}</p>
      <StyledLink to={`/teams/${teams.id}`}>
        <p>{teams.name}</p>
      </StyledLink>
    </StyledList>
  );
}

export default PlayerCard;
