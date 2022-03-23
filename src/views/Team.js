import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import { fetchTeamId } from '../services/teams';

function Team() {
  const params = useParams();
  const [teamInfo, setTeamInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamId(params.id);
      setTeamInfo(data);
    };
    fetchData();
  }, [params]);
  return <TeamCard {...{ teamInfo }} />;
}
export default Team;
