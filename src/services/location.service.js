import axios from 'axios';
const API_URL = 'http://localhost:8080/api/location-service/';
class LocationService {
  getAllLocation() {
    return axios.get(API_URL);
  }
  getLocationById(id) {
    return axios.get(API_URL + 'location-by-id/' + id)
  }
  getLocationByName(name) {
    return axios.get(API_URL + 'location-by-name/' + name)
  }
  getLocationByCode(code) {
    return axios.get(API_URL + 'location-by-code/' + code)
  }
}
export default new LocationService();