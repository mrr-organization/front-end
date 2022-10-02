import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/user/';
class UserService {
  editUser(username) {
    return axios.put(API_URL + 'edit-user/' + username, { headers: authHeader() });
  }
  getUserDetailByUserNo(userNo) {
    return axios.get(API_URL + userNo, { headers: authHeader() });
  }
}
export default new UserService();