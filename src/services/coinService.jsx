import axios from "axios";
import { COIN_BASE_URL } from "../constants/serviceConstants.jsx";
import Cookies from "universal-cookie";

export default class CoinService {
  constructor() {
    const cookies = new Cookies();
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
      "token"
    )}`;
    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        alert("Please login again");
        //cookies.remove("token");
        // window.location.replace("/login");
      }
    );
  }
  delete(id) {
    return axios.delete(`${COIN_BASE_URL}/delete?id=${id}`);
  }

  update(userId, coin) {
    return axios.put(`${COIN_BASE_URL}/update?id=${userId}`, {
      userId: userId,
      totalCoin: coin,
    });
  }

  getById(id) {
    return axios.get(`${COIN_BASE_URL}/getbyid?id=${id}`);
  }
}
