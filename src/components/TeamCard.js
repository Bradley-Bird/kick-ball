import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeamId } from '../services/teams';

function TeamCard() {
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamId(params.id);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  return <div>TeamCard</div>;
}

export default TeamCard;
