import axios from "axios";
import { RCYCLE_TYPE_BASE_URL } from "../constants/serviceConstants.jsx";
import Cookies from "universal-cookie";

export default class TypeService {
  constructor() {
    const cookies = new Cookies();
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
      "token"
    )}`;
    axios.interceptors.response.use(
      (res) => res,

      (err) => {
        if (err.response.status == 401) {
          cookies.remove("token");
          window.location.replace("/login");
        }
      }
    );
  }
  add(name) {
    return axios.post(`${RCYCLE_TYPE_BASE_URL}/add`, {
      recycleTypeName: name,
    });
  }

  delete(id) {
    return axios.delete(`${RCYCLE_TYPE_BASE_URL}/delete/`, { id: id });
  }

  update(id, name) {
    return axios.put(`${RCYCLE_TYPE_BASE_URL}/update`, {
      id: id,
      recycleTypeName: name,
    });
  }

  getAll(page, size) {
    return axios.get(
      `${RCYCLE_TYPE_BASE_URL}/getlist?Page=${page}&PageSize=${size}`
    );
  }

  getById(id) {
    return axios.get(`${RCYCLE_TYPE_BASE_URL}/${id}`);
  }

  getAllByDynamicFilter(page, size, name) {
    return axios.get(
      `${RCYCLE_TYPE_BASE_URL}/GetList/ByDynamic?Page=${page}&PageSize=${size}`,
      {}
    );
  }
}
