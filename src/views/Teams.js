import { useEffect, useState } from 'react';
import TeamsList from '../components/TeamsList';
import { fetchTeams } from '../services/teams';

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TeamsList {...{ teams }} />
    </div>
  );
}

export default Teams;
