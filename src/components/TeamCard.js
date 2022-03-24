import { StyledLink, StyledList } from '../components/styles/StyledContainer';

function TeamCard({ teamInfo, teamInfo: { players } }) {
  return (
    <StyledList>
      <h2>{teamInfo.name}</h2>
      {players.map((player) => (
        <StyledLink key={player.id} to={`/players/${player.id}`}>
          <p>
            {player.position}: {player.name}
          </p>
        </StyledLink>
      ))}
    </StyledList>
  );
}

export default TeamCard;
