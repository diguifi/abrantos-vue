import axios from 'axios';
import Api from '../../api';

export async function AUTH_REQUEST(context, loginParams) {
  const api = new Api();
  const response = await api.post('authentication/login', { userName: loginParams.username, password: loginParams.password });

  const token = response.data.accessToken;
  localStorage.setItem('abrantostoken', token);
  const axiosAuthHeader = 'Authorization';
  axios.defaults.headers.common[axiosAuthHeader] = `Bearer ${token}`;

  this.commit('auth/setAuthenticated', token);
  return true;
}
