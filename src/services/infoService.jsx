import axios from "axios";
import { INFO_BASE_URL } from "../constants/serviceConstants.jsx";

export default class InfoService {
  constructor() {
    const cookies = new Cookies();
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
      "token"
    )}`;
    axios.interceptors.response.use(
      (res) => res,

      (err) => {
        alert("Please try again");
      }
    );
  }
  add(firstName, lastName, role, image) {
    return axios.post(`${INFO_BASE_URL}/add`, {
      firstName: firstName,
      lastName: lastName,
      role: role,
      image: image,
    });
  }

  update(id, firstName, lastName, role, image) {
    return axios.put(`${INFO_BASE_URL}/update?id=${id}`, {
      firstName: firstName,
      lastName: lastName,
      role: role,
      image: image,
    });
  }

  getById(id) {
    return axios.get(`${INFO_BASE_URL}/getbyid?id=${id}`);
  }
}
