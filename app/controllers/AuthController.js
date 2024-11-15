import { AuthService } from '../services/AuthService.js'
import { AppState } from '../AppState.js';

export class AuthController {
  constructor() {
    AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, this.drawUser.bind(this));
    AppState.on('account', this.drawUser.bind(this));
    this.drawUser();
  }

  async login() {
    try {
      await AuthService.loginWithRedirect();
    } catch (e) {
      console.error('Error during login:', e);
    }
  }

