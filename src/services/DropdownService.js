import axios from "axios";
const DROPDOWN_SERVICE_URL="http://localhost:8080/dropdown";
class DropdownService{
   
    getBatchs(){
        return axios.get(DROPDOWN_SERVICE_URL +"/"+"batchs");
    }
    getModules(){
        return axios.get(DROPDOWN_SERVICE_URL +"/"+"modules");
    }

}


export default new DropdownService();