import { useEffect, useState } from 'react';
import { fetchPlayersId } from '../services/players';
import { useParams } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';

function Player() {
  const [player, setPlayer] = useState({ teams: [] });
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await fetchPlayersId(params.id)
        .then((resp) => {
          if (resp) {
            setPlayer(resp);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [params]);

  return player !== undefined && <PlayerCard player={player} />;
}

export default Player;
