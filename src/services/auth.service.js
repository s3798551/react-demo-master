import axios from "axios";

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

  order(senderName, senderPhonenumber, senderAddress, receiverName, receiverPhonenumber, receiverAddress,
        productType, productWeight, startDate, startTime, returnLabel){
    return axios.post(API_URL + "order",{
      senderName,
      senderPhonenumber,
      senderAddress,
      receiverName,
      receiverPhonenumber,
      receiverAddress,
      productType,
      productWeight,
      startDate,
      startTime,
      returnLabel
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
