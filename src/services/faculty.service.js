import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/faculty-service/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/faculty-service/';
class FacultyService {
  getAllFaculty() {
    return axios.get(API_URL);
  }
  getFacultyById(id) {
    return axios.get(API_URL + 'faculty-by-id/' + id)
  }
  getFacultyByName(name) {
    return axios.get(API_URL + 'faculty-by-name/' + name)
  }
}
export default new FacultyService();