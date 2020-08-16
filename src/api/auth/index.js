import request from 'api/request';
import { authHeader } from 'api/config'; 

const login = (body) => {
  return request().post('/login', body);
}

const getProfile = () => {
  return request({ headers: authHeader() }).get('/profile');
}

export default {
  login,
  getProfile
}