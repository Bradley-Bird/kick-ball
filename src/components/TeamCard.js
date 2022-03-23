function TeamCard({ teamInfo: { players } }) {
  console.log(players);
  return (
    <div>
      {players.map((player) => (
        <p key={player.id}>
          {player.position}: {player.name}
        </p>
      ))}
    </div>
  );
}

export default TeamCard;
