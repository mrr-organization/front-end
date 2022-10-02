import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/notification/';
class NotificationService {
  comingSoon() {
    return axios.get(API_URL + '', { headers: authHeader() });
  }
}
export default new NotificationService();