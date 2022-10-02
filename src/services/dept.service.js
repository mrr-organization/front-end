import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/dept/';
class DepartmentService {
  getAllDepartments() {
    return axios.get(API_URL + 'departments', { headers: authHeader() });
  }
}
export default new DepartmentService();