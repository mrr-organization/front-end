import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/user-service/';
class UserService {
  getUserByUID (uid) {
    return axios.get(API_URL + uid, {headers: authHeader() });
  }
  editUser(user) {
    return axios.post(API_URL + 'edit-user?username=' + user.username ,
    {    
    username : user.username,
    firstName : user.firstName,
    lastName:  user.lastName,
    phone : user.phone,
    userNo : user.userNo}
    , { headers: authHeader() });
  }
  deleteUserByAdmin(username) {
    return axios.delete(API_URL + 'delete/'+ username, { headers: authHeader() });
  }
}
export default new UserService();