import axios from 'axios';

const API_URL = process.env.VUE_APP_API_FACULTY_PATH;

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