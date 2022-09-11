import axios from 'axios';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/auth/';
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
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      roles: ["user"]
    });
  }
}
export default new AuthService();