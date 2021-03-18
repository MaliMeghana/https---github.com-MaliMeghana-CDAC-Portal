import axios from "axios";
const ADMIN_SERVICE="http://localhost:8080/result";
class AdminService{

    uploadExcel(data){
  
        return axios.post(ADMIN_SERVICE+"/"+"upload",data);
    }
       
}
//done
export default new AdminService();