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
    console.log("yeeeeeeeeeeeeeeeeee")
    console.log(formData.get('senderName'))
    console.log(formData.get('senderPhonenumber'))
    console.log(formData.get('senderAddress'))
    console.log(formData.get('receiverName'))
    console.log(formData.get('receiverPhonenumber'))
    console.log(formData.get('receiverAddress'))
    console.log(formData.get('productType'))
    console.log(formData.get('productWeight'))
    console.log(formData.get('startDate'))
    console.log(formData.get('startTime'))
    console.log(formData.get('returnLabel'))
    console.log("asdasdadasdadas")

    return axios({
      method: 'POST',
      url: API_URL + 'orders/create',
      contentType: "application/json",
      data: formData
    })

    // return axios.post(API_URL + "orders/create",{
    //   formData
    // })
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

  getOrderDetails(){

  }


}

export default new AuthService();
