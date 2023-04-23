import axios from 'axios';

axios.defaults.baseURL = 'https://64423dc033997d3ef90b5bd9.mockapi.io';

export const usersGet = async () => {
  const data = await axios.get(`/followers`);
  return data;
};
export const userId = async ({ id, body }) => {
  const data = await axios.put(`/followers/${id}`, body);
  return data;
};
