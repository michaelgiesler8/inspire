import { api } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account');
      AppState.account = new Account(res.data);
    } catch (err) {
      console.error('Error getting account:', err);
    }
  }
}

export const accountService = new AccountService();