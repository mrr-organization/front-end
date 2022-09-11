import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/repair-notification/';
class RepairNotificationService {
    // createRepairNotification(from) {
    //   let user = JSON.parse(localStorage.getItem('user'));
    //   return axios.post(API_URL + 'create-repair', from, { headers: {
    //     "Authorization": 'Bearer ' + user.accessToken,
    //     "Content-type": "application/json"
    //   }});
    // }
    createRepairNotification(from) {
      return axios.post(API_URL + 'create-repair', { id: from.id,
        detail: from.detail,
        location: from.location}, {headers: authHeader()});
    }
    updateRepairNotification(from){
      return axios.put(API_URL + 'update-repair', { id: from.id,
      detail: from.detail,
      location: from.location}, {headers: authHeader()});
    }
    getAllRepairNotification(){
      return axios.get(API_URL+ 'all', {headers: authHeader()})
    }

    getAllRepairNotificationByUsername(username){
      return axios.get(API_URL+ 'user/'+ username, {headers: authHeader()})
    }
  }
  export default new RepairNotificationService();