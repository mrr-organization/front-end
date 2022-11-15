import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'http://localhost:8080/api/repair-notification/';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/repair-notification/';
class RepairNotificationService {
  getRepairNotificationById(id) {
    return axios.get(API_URL + id)
  }
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
    return axios.get(API_URL + 'user/' + username + "/" + offSet + "/6", { headers: authHeader() })
  }
  getAllRepairNotificationByDepartment(deptId, offSet) {
    return axios.get(API_URL + 'dept/' + deptId + "/" + offSet + "/6", { headers: authHeader() })
  }
  getAllRepairNotificationByDepartments(deptId, offSet) {
    return axios.get(API_URL + 'dept-all/' + deptId + "/" + offSet + "/6", { headers: authHeader() })
  }

  updateDepartment(repairId, deptId) {
    console.log(authHeader())
    return axios.post(API_URL + repairId + '/update-dept/' + deptId, deptId, { headers: authHeader() });
  }
  deleteRepairNotification(repairId) {
    return axios.delete(API_URL + 'delete-repair/' + repairId, { headers: authHeader() })
  }
  updateStatusReject(repairId) {
    console.log(authHeader())
    return axios.post(API_URL + repairId + '/reject', repairId, {
      headers: {
        'Authorization': authHeader().Authorization
      } 
    });
  }
  updateStatusComplete(repairId) {
    return axios.post(API_URL + repairId + '/complete', repairId, { headers: authHeader() });
  }
}
export default new RepairNotificationService();