import axios from 'axios';

const API_URL = process.env.VUE_APP_API_LOCATION_PATH ;

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