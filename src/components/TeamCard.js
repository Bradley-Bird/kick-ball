function TeamCard({ teamInfo, teamInfo: { players } }) {
  console.log(players);
  return (
    <div>
      <h2>{teamInfo.name}</h2>
      {players?.map((player) => (
        <p key={player.id}>
          {player.position}: {player.name}
        </p>
      ))}
    </div>
  );
}

export default TeamCard;
