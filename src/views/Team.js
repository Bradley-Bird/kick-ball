import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import { fetchTeamId } from '../services/teams';
import StyledContainer from '../components/styles/StyledContainer';

function Team() {
  const params = useParams();
  const [teamInfo, setTeamInfo] = useState({ players: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamId(params.id);
        setTeamInfo(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params]);
  loading && <p>Loading...</p>;
  return error ? (
    <p>{error}</p>
  ) : (
    <StyledContainer>
      <TeamCard {...{ teamInfo }} />;
    </StyledContainer>
  );
}
export default Team;
