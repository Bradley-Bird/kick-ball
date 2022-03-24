import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/players';
import PlayersList from '../components/PlayersList';
import { StyledContainer } from '../components/styles/StyledContainer';

function Players() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
        setLoading(false);
      } catch (e) {
        setError('e.message');
      }
    };
    fetchData();
  }, []);
  loading && <p>Loading...</p>;
  return error ? (
    <p>{error.message}</p>
  ) : (
    <StyledContainer>
      <PlayersList {...{ players }} />;
    </StyledContainer>
  );
}

export default Players;
