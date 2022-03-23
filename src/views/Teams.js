import { useEffect, useState } from 'react';
import { fetchTeams } from '../services/teams';

function Teams() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Teams</div>;
}

export default Teams;
