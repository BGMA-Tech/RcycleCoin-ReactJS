import axios from 'axios';
import { TRANSACTION_BASE_URL } from '../constants/serviceConstants.jsx';

export default class TransactionService {
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
    return axios.get(`${TRANSACTION_BASE_URL}/RecycleInfo/getall`);
  }

  getAllById(id) {
    return axios.get(`${TRANSACTION_BASE_URL}/RecycleInfo/getallbyid?id=${id}`);
  }
}
