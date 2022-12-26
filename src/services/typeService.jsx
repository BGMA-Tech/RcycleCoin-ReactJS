import axios from 'axios';
import { RCYCLE_TYPE_BASE_URL } from '../constants/serviceConstants.jsx';

export default class TypeService {
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
      `${RCYCLE_TYPE_BASE_URL}/RecycleType/getlist?Page=${page}&PageSize=${size}`
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
