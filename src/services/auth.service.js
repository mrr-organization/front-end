import axios from 'axios';
const API_URL = 'http://20.92.229.52:8080/api/auth/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'sign-in', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'sign-up', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();