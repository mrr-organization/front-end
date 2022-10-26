import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/notification/';
class NotificationService {
  getNotificationByUsername(username) {
    return axios.get(API_URL + 'user/' + username, { headers: authHeader() });
  }
  deleteAllNotification(UID) {
    return axios.delete(API_URL + 'delete-all/' + UID, { headers: authHeader() });
  }
  deleteNotificationById  (id) {
    return axios.delete(API_URL + 'delete/' + id, { headers: authHeader() });
  }
}
export default new NotificationService();