import axios from 'axios';
import { INFO_BASE_URL } from '../constants/serviceConstants.jsx';

export default class InfoService {
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
