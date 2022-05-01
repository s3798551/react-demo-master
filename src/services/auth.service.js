import axios from "axios";
import qs from "qs";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  order(formData){
    return axios.post(API_URL + "order",{
      formData
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getOrderList() {
    const userID= this.getCurrentUser().id;
    axios({
      method: 'GET',
      url: API_URL + 'orderList',
      data: userID
    }).then(res => {
      return res;
    })

    return axios.get(API_URL + 'orderList',userID);
  }

}

export default new AuthService();
