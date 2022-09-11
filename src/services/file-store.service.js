import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://www.k-mutt-mrr-service.systems/be-path/api/file-service/';
class RepairNotificationService {
    uploadMultipleFiles(id, files) {
    let fromData = new FormData();
    for (let i = 0; i < files.length; i++) {
      fromData.append("files", files[i])
    }
      return axios.post(API_URL + 'uploadFiles/' + id, fromData, {
        headers: {
          "Authorization": authHeader().Authorization,
          "Content-Type": "multipart/form-data"
        }
      });
    }
    getFileStore(fileName) {
      return axios.get(API_URL + fileName, {headers: authHeader()})
    }
  }
  export default new RepairNotificationService();