import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/major-service/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/major-service/';
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