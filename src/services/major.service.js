import axios from 'axios';

const API_URL = process.env.VUE_APP_API_MAJOR_PATH;

class MajorService {
  getAllMajor() {
    return axios.get(API_URL);
  }
  getMajorById(id) {
    return axios.get(API_URL + 'major-by-id/' + id)
  }
  getMajorByName(name) {
    return axios.get(API_URL + 'major-by-name/' + name)
  }
  getMajorByFacultyId(id) {
    return axios.get(API_URL + 'faculty/' + id)
  }
}
export default new MajorService();