import axios from 'axios';
import { RCYCLE_PRODUCT_BASE_URL } from '../constants/serviceConstants.jsx';

export default class ProductService {
  add(name, point, typeId) {
    return axios.post(`${RCYCLE_PRODUCT_BASE_URL}/add`, {
      recycleName: name,
      recyclePoint: point,
      recycleTypeId: typeId,
    });
  }

  delete(id) {
    return axios.delete(`${RCYCLE_PRODUCT_BASE_URL}/delete/`, { id: id });
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
      `${RCYCLE_PRODUCT_BASE_URL}/RecycleProduct/getlist?Page=${page}&PageSize=${size}`
    );
  }

  getById(id) {
    return axios.get(`${RCYCLE_PRODUCT_BASE_URL}/${id}`);
  }

  getAllByDynamicFilter(page, size, name, typeId) {
    return axios.get(
      `${RCYCLE_PRODUCT_BASE_URL}/GetList/ByDynamic?Page=${page}&PageSize=${size}`,
      {
        //TODO: Get All By Dynamic
      }
    );
  }
}
