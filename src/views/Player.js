import { useEffect, useState } from 'react';
import { fetchPlayersId } from '../services/players';
import { useParams } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import StyledContainer from '../components/styles/StyledContainer';

function Player() {
  const [player, setPlayer] = useState({ teams: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await fetchPlayersId(params.id)
        .then((resp) => {
          if (resp) {
            setPlayer(resp);
          }
        })
        .catch((error) => setError(error))
        .finally(setLoading(false));
    };
    fetchData();
  }, [params]);
  loading && <p>loading...</p>;
  return error ? (
    <p>{error.message}</p>
  ) : (
    <StyledContainer>
      <PlayerCard player={player} />;
    </StyledContainer>
  );
}

export default Player;
