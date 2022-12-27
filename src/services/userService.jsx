import axios from "axios";
import { USER_BASE_URL } from "../constants/serviceConstants.jsx";

export default class UserService {
  login(email, password) {
    return axios.post(`${USER_BASE_URL}/login`, {
      email: email,
      password: password,
    });
  }

  register(email, password, firstName, lastName, role, image) {
    return axios.post(`${USER_BASE_URL}/register`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role,
      image: image,
    });
  }

  getById(id) {
    return axios.get(`${USER_BASE_URL}/getbyid?userId=${id}`);
  }

  getVerifyId(id, name, lastname, year) {
    return axios.post(`${USER_BASE_URL}/getverifyid`, {
      idNumber: id,
      name: name,
      lastName: lastname,
      birthdayYear: parseInt(year),
    });
  }
}
