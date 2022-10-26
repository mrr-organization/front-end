import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/file-service/';
class FileService {
  uploadMultipleFiles(id, files, imageType) {
    let fromData = new FormData();
    for (let i = 0; i < files.length; i++) {
      fromData.append("files", files[i])
    }
    return axios.post(API_URL + 'uploadFiles/' + id + '/' + imageType, fromData, {
      headers: {
        "Authorization": authHeader().Authorization,
        "Content-Type": "multipart/form-data"
      }
    });
  }

  uploadMultipleFile(id, file, imageType) {
    let fromData = new FormData();
    fromData.append("file", file)
    return axios.post(API_URL + 'uploadFile/' + id + '/' + imageType, fromData, {
      headers: {
        "Authorization": authHeader().Authorization,
        "Content-Type": "multipart/form-data"
      }
    });
  }

  getFileStore(fileName) {
    return axios.get(API_URL + fileName, { headers: authHeader() })
  }
  getFileNameByRepairId(repairId) {
    return axios.get(API_URL + 'repair-image/' + repairId, { headers: authHeader() })
  }

  getFileNameByUID(uid) {
    return axios.get(API_URL + 'UID/' + uid, { headers: authHeader() })
  }
}
export default new FileService();