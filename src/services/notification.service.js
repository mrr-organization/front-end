import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/notification/';
class NotificationService {
  getNotificationByUsername(username, offSet) {
    return axios.get(API_URL + 'user/' + username +"/" + offSet + "/6", { headers: authHeader() });
  }
  deleteAllNotification(uid) {
    return axios.delete(API_URL + 'delete-all/' + uid, { headers: authHeader() });
  }
  deleteNotificationById  (id) {
    return axios.delete(API_URL + 'delete/' + id, { headers: authHeader() });
  }
}
export default new NotificationService();