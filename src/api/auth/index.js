import request from 'api/request';
import { authHeader } from 'api/config';

const login = (body) => request().post('/login', body);

const getProfile = () => request({ headers: authHeader() }).get('/profile');

export default {
  login,
  getProfile,
};
