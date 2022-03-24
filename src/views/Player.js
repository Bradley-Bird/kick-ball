import { useEffect, useState } from 'react';
import { fetchPlayersId } from '../services/players';
import { useParams } from 'react-router-dom';

function Player() {
  const [player, setPlayer] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersId(params.id);
      console.log(data);
      setPlayer(data);
    };
    fetchData();
  }, [params]);

  return <div>Player</div>;
}

export default Player;
