import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/';
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
    return response.data;
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'sign-up', {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
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
}
export default new AuthService();