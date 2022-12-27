import axios from "axios";
import Cookies from "universal-cookie";
import { USER_RCYCLE_TYPE_BASE_URL } from "../constants/serviceConstants.jsx";
import UserService from "../services/userService";
import CoinService from "../services/coinService";

export default class UserProductService {
  constructor() {
    const cookies = new Cookies();
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
      "token"
    )}`;
    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        alert("Please login again");
        // cookies.remove("token");
        // window.location.replace("/login");
      }
    );
  }
  add(userId, productId, quantity) {
    return axios.post(`${USER_RCYCLE_TYPE_BASE_URL}/add`, {
      userId: userId,
      recycleProductId: productId,
      quantity: quantity,
    });
  }

  delete(id) {
    return axios.delete(`${USER_RCYCLE_TYPE_BASE_URL}/delete/`, { id: id });
  }

  update(id, userId, productId, quantity, status) {
    return axios.put(`${USER_RCYCLE_TYPE_BASE_URL}/update`, {
      id: id,
      userId: userId,
      recycleProductId: productId,
      quantity: quantity,
      status: status,
    });
  }

  getAll(page, size) {
    return axios.get(
      `${USER_RCYCLE_TYPE_BASE_URL}/getlist?Page=${page}&PageSize=${size}`
    );
  }

  getById(id) {
    return axios.get(`${USER_RCYCLE_TYPE_BASE_URL}/${id}`);
  }

  getAllByDynamicFilter(page, size) {
    return axios.post(
      `${USER_RCYCLE_TYPE_BASE_URL}/GetList/ByDynamic?Page=${page}&PageSize=${size}`,
      {
        sort: [
          {
            field: "Quantity",
            dir: "asc",
          },
        ],
        filter: {
          field: "Status",
          operator: "eq",
          value: "false",
        },
      }
    );
  }

  verifyUserProductRequest(userProductId, userId, productId, quantity, coin) {
    const userService = new UserService();
    const coinService = new CoinService();

    this.update(userProductId, userId, productId, quantity, true)
      .then((result) => {
        userService
          .getById(userId)
          .then((res) => {
            userService
              .getById(userId)
              .then((res) => {
                console.log("DATA:", res.data);
                coinService
                  .update(
                    res.data.data.data.personelId,
                    res.data.data.data.coin.totalCoin + quantity * coin
                  )
                  .then((res) => {
                    window.location.reload();
                    console.log(res);
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
}
