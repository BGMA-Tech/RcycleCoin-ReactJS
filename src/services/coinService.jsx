import axios from 'axios';
import { COIN_BASE_URL } from '../constants/serviceConstants.jsx';

export default class CoinService {
  delete(id) {
    return axios.delete(`${COIN_BASE_URL}/delete?id=${id}`);
  }

  update(id, userId, coin) {
    return axios.put(`${COIN_BASE_URL}/update?id=${id}`, {
      userId: userId,
      coin: coin,
    });
  }

  getById(id) {
    return axios.get(`${COIN_BASE_URL}/getbyid?id=${id}`);
  }
}
