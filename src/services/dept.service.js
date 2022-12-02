import axios from 'axios';

const API_URL = process.env.VUE_APP_API_DEPT_PATH;

class DepartmentService {
  getAllDepartments() {
    return axios.get(API_URL);
  }
  getDepartmentsById(id) {
    return axios.get(API_URL + 'department-by-id/' + id)
  }
  getDepartmentsByName(name) {
    return axios.get(API_URL + 'department-by-name/' + name)
  }
  getDepartmentsByLevel(level) {
    return axios.get(API_URL + 'department-by-level/' + level)
  }
  getDepartmentsByCode(code) {
    return axios.get(API_URL + 'department-by-code/' + code)
  }
}
export default new DepartmentService();