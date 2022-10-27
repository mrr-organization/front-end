import axios from 'axios';
const API_URL = 'http://localhost:8080/api/faculty-service/';
class FacultyService {
  getAllFaculty() {
    return axios.get('http://localhost:8080/api/faculty-service/');
  }
  getFacultyById(id) {
    return axios.get(API_URL + 'faculty-by-id/' + id)
  }
  getFacultyByName(name) {
    return axios.get(API_URL + 'faculty-by-name/' + name)
  }
}
export default new FacultyService();