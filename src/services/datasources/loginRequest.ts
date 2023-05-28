import { Api } from '../lib/axios';

export async function loginRequest(email: string, password: string) {
  const response = await Api.post('/login', { email, password });

  return response.data;
}
