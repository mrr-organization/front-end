import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/location/';
class LocationService {
  getAllLocation() {
    return axios.get(API_URL + 'all', { headers: authHeader() });
  }
}
export default new LocationService();