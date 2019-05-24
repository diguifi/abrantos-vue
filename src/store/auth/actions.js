import axios from 'axios';

export async function AUTH_REQUEST(context, loginParams) {
  const response = await axios.post('https://abrantos.azurewebsites.net/api/authentication/login', { userName: loginParams.username, password: loginParams.password });
  const token = response.data.accessToken;
  localStorage.setItem('abrantostoken', token);
  const axiosAuthHeader = 'Authorization';
  axios.defaults.headers.common[axiosAuthHeader] = `Bearer ${token}`;
  this.commit('auth/setAuthenticated', true);
  return true;
}
