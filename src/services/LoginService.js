import axios from "axios";
const LOGIN_SERVICE_URL="http://localhost:8080/user/";
class LoginService{

    getRole(){
        return axios.get(LOGIN_SERVICE_URL+ "role");
    }

    login(userId,password,roleId){
        //console.log("user", JSON.stringify(user1));
        return axios.post(LOGIN_SERVICE_URL+userId+"/"+password+"/"+roleId);
    }
}

export default new LoginService();