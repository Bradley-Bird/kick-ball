import { useEffect, useState } from 'react';
import TeamsList from '../components/TeamsList';
import { fetchTeams } from '../services/teams';
import StyledContainer from '../components/styles/StyledContainer';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeams();
        setTeams(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [setError]);
  loading && <p>Loading...</p>;
  return (
    <StyledContainer>
      {error ? <p>{error.message}</p> : <TeamsList {...{ teams }} />}
    </StyledContainer>
  );
}
export default Teams;
