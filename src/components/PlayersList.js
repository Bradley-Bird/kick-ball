import { StyledLink, StyledList } from '../components/styles/StyledContainer';

function PlayersList({ players }) {
  return (
    <StyledList>
      {players.map((player) => (
        <StyledLink key={player.id} to={`/players/${player.id}`}>
          <p>{player.name}</p>
        </StyledLink>
      ))}
    </StyledList>
  );
}

export default PlayersList;
