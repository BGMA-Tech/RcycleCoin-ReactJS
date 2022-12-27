import axios from "axios";
import { TRANSACTION_BASE_URL } from "../constants/serviceConstants.jsx";
import Cookies from "universal-cookie";

export default class TransactionService {
  constructor() {
    const cookies = new Cookies();
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
      "token"
    )}`;
    axios.interceptors.response.use(
      (res) => res,

      (err) => {
        alert("Please login again");
        //   cookies.remove("token");
        //  window.location.replace("/login");
      }
    );
  }
  add(fromPersonelId, toPersonelId, coinAmount) {
    return axios.post(`${TRANSACTION_BASE_URL}/add`, {
      fromPersonelId: fromPersonelId,
      toPersonelId: toPersonelId,
      coinAmount: coinAmount,
    });
  }

  getById(id) {
    return axios.get(`${TRANSACTION_BASE_URL}/getbyid?id=${id}`);
  }

  getAll(page, size) {
    return axios.get(`${TRANSACTION_BASE_URL}/getall`);
  }

  getAllById(id) {
    return axios.get(`${TRANSACTION_BASE_URL}/getallbyid?id=${id}`);
  }

  getAllByFromId(id) {
    return axios.get(
      `${TRANSACTION_BASE_URL}/getallbyfrompersonelid?fromPersonelId=${id}`
    );
  }

  getAllByToId(id) {
    return axios.get(
      `${TRANSACTION_BASE_URL}/getallbytopersonelid?toPersonelId=${id}`
    );
  }
}
