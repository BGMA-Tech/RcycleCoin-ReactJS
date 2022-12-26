import axios from 'axios';
import { USER_RCYCLE_TYPE_BASE_URL } from '../constants/serviceConstants.jsx';

export default class UserProductService {
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

  update(id, userId, productId, quantity) {
    return axios.put(`${USER_RCYCLE_TYPE_BASE_URL}/update`, {
      id: id,
      userId: userId,
      recycleProductId: productId,
      quantity: quantity,
    });
  }

  getAll(page, size) {
    return axios.get(
      `${USER_RCYCLE_TYPE_BASE_URL}/RecycleUserProduct/getlist?Page=${page}&PageSize=${size}`
    );
  }

  getById(id) {
    return axios.get(`${USER_RCYCLE_TYPE_BASE_URL}/${id}`);
  }

  getAllByDynamicFilter(page, size, userId, productId) {
    return axios.get(
      `${USER_RCYCLE_TYPE_BASE_URL}/GetList/ByDynamic?Page=${page}&PageSize=${size}`,
      {}
    );
  }
}
