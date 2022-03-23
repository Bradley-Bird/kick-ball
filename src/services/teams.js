import { client, checkError } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select();
  return checkError(resp);
}

export async function fetchTeamId(id) {
  const resp = await client.from('teams').select().match({ id: id }).single();
  return checkError(resp);
}
