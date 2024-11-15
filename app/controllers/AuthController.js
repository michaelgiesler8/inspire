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

  drawUser() {
    const user = AppState.user;
    const account = AppState.account;
    const authStateElement = document.getElementById('authstate');

    if (user && user.isAuthenticated) {
      authStateElement.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${account.picture}" alt="${account.name}" class="user-avatar me-2">
          <span>${account.name}</span>
          <button class="btn btn-outline-light btn-sm ms-3" onclick="app.authController.logout()">Logout</button>
        </div>
      `;
    } else {
      authStateElement.innerHTML = `
        <button class="btn btn-outline-light" onclick="app.authController.login()">Login</button>
      `;
    }
  }
}