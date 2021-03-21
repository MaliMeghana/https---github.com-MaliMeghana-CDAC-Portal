import axios from "axios";
const SUPER_ADMIN_SERVICE_URL="http://localhost:8080/result";

class SuperAdminService{

    getRankData(){
        return axios.get(SUPER_ADMIN_SERVICE_URL+"/"+"rank");
    }
}

export default new SuperAdminService();