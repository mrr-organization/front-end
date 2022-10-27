import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'http://localhost:8080/api/repair-notification/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/repair-notification/';
class RepairNotificationService {
  createRepairNotification(from) {
    return axios.post(API_URL + 'create-repair', {
      id: from.id,
      detail: from.detail,
      location: from.location
    }, { headers: authHeader() });
  }
  updateRepairNotification(from) {
    return axios.post(API_URL + 'update-repair', {
      id: from.id,
      detail: from.detail,
      location: from.location
    }, { headers: authHeader() });
  }
  getAllRepairNotification() {
    return axios.get(API_URL + 'all')
  }
  getCountStatus() {
    return axios.get(API_URL + 'count/status')
  }
  getCountYear(year) {
    return axios.get(API_URL + 'count/' + year)
  }

  getAllRepairNotificationByStatus(status, pageNumber) {
    return axios.get(API_URL + 'all/' + status + "/" + pageNumber + "/6")
  }

  getAllRepairNotificationByUsername(username, offSet) {
    return axios.get(API_URL + 'user/' + username +"/" + offSet +"/6", { headers: authHeader() })
  }

  updateDepartment(updateDeptData) {
    return axios.post(API_URL + updateDeptData.repairId + '/update-dept?deptId=' + updateDeptData.deptId, { headers: authHeader() });
  }
  deleteRepairNotification (repairId) {
    return axios.delete(API_URL + 'delete-repair/' + repairId, { headers: authHeader() })
  }
  updateStatusReject(repairId) {
    return axios.post(API_URL + repairId + '/reject', { headers: authHeader() });
  }  
  updateStatusComplete(repairId) {
    return axios.post(API_URL + repairId + '/complete', { headers: authHeader() });
  }
}
export default new RepairNotificationService();