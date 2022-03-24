import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/players';
import PlayersList from '../components/PlayersList';

function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <PlayersList {...{ players }} />
    </div>
  );
}

export default Players;
