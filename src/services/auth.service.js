import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'http://localhost:8080/api/auth/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/auth/';
class AuthService {
  async login(user) {
    const response = await axios
      .post(API_URL + 'sign-in', {
        username: user.username,
        password: user.password
      });
    if (response.data.responseData.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data.responseData));
    }
    return response.data.responseData;
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    console.log(user)
    return axios.post(API_URL + 'sign-up', {
      username: user.username,
      firstName: user.fname,
      lastName: user.lname,
      email: user.email,
      password: user.password,
      phone: user.phone,
      userType: user.userType,
      majorId: user.majorId,
      facultyId: user.facultyId,
      deptId: user.deptId,
      roles: ["user"]
    });
  }

  registerModerator(moderator) {
    return axios.post(API_URL + 'sign-up/moderator', {
      username: moderator.username,
      firstName: moderator.fname,
      lastName: moderator.lname,
      email: moderator.email,
      password: moderator.password,
      phone: moderator.phone,
      deptId: moderator.deptId,
      userType: 'MODERATOR',
      roles: ["moderator"]
    }, { headers: authHeader() });
  }
}
export default new AuthService();