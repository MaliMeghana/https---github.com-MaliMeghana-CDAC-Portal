import axios from "axios";
const ADMIN_SERVICE="http://localhost:8080/result";
class AdminService{

    uploadExcel(file,moduleId){
        return axios.post(ADMIN_SERVICE+"/"+"upload/",file,moduleId, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    }
       
}
//done
export default new AdminService();