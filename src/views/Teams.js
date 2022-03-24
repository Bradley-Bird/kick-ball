import { useEffect, useState } from 'react';
import TeamsList from '../components/TeamsList';
import { fetchTeams } from '../services/teams';

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
  return error ? <p>{error.message}</p> : <TeamsList {...{ teams }} />;
}

export default Teams;
