import axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies.js";
import { RCYCLE_PRODUCT_BASE_URL } from "../constants/serviceConstants.jsx";

export default class ProductService {
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
  add(name, point, typeId) {
    return axios.post(`${RCYCLE_PRODUCT_BASE_URL}/add`, {
      recycleName: name,
      recyclePoint: point,
      recycleTypeId: typeId,
    });
  }

  delete(id) {
    return axios.delete(`${RCYCLE_PRODUCT_BASE_URL}/delete`, {
      data: { id: id },
    });
  }

  update(id, name, point, typeId) {
    return axios.put(`${RCYCLE_PRODUCT_BASE_URL}/update`, {
      id: id,
      recycleName: name,
      recyclePoint: point,
      recycleTypeId: typeId,
    });
  }

  getAll(page, size) {
    return axios.get(
      `${RCYCLE_PRODUCT_BASE_URL}/getlist?Page=${page}&PageSize=${size}`
    );
  }

  getById(id) {
    return axios.get(`${RCYCLE_PRODUCT_BASE_URL}/${id}`);
  }

  getAllByDynamicFilter(page, size) {
    return axios.get(
      `${RCYCLE_PRODUCT_BASE_URL}/GetList/ByDynamic?Page=${page}&PageSize=${size}`,
      {}
    );
  }
}
