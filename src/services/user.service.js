import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'http://localhost:8080/api/user-service/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/user-service/';
class UserService {
  getUserFullResponse(uid) {
    return axios.get(API_URL + "user/full/" + uid, { headers: authHeader() });
  }
  getUserByUID(uid) {
    return axios.get(API_URL + uid, { headers: authHeader() });
  }
  editUser(user) {
    return axios.post(API_URL + 'edit-user?username=' + user.username,
      {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        userNo: user.userNo
      }
      , { headers: authHeader() });
  }
  deleteUserByAdmin(username) {
    return axios.delete(API_URL + 'delete/' + username, { headers: authHeader() });
  }

  getListUserByUserTypeForAdmin(userType, offset) {
    return axios.get(API_URL + 'users/get-for-admin/' + userType + '/' + offset + '/6', { headers: authHeader() });
  }

  findUserByUsername(text, userType, offset) {
    return axios.get(API_URL + 'findByUsername/' + text + '/' + userType + '/' + offset + '/6', { headers: authHeader() });
  }

}
export default new UserService();