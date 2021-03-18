import axios from "axios";
const LOGIN_SERVICE_URL="http://localhost:8080/user/";
class LoginService{

    getRole(){
        return axios.get(LOGIN_SERVICE_URL+ "role");
    }

    login(user){
        console.log("user", JSON.stringify(user));
        return axios.post(LOGIN_SERVICE_URL,user);
    }
}

export default new LoginService();