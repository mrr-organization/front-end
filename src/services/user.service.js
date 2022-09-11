import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/user/';
class UserService {
  editUser(username) {
    return axios.put(API_URL + 'edit-user/' + username, { headers: authHeader()});
  }

}
export default new UserService();