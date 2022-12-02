import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_USER_PATH;

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

  banUser(username) {
    return axios.get(API_URL + 'ban-user/' + username, { headers: authHeader() });
  }

}
export default new UserService();