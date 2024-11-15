import { Auth0Provider } from '@bcwdev/auth0provider';
import { api } from './AxiosService.js';
import { AppState } from '../../AppState.js';
import { accountService } from './AccountService.js';
import { domain, clientId, audience } from '../../env.js';

export const AuthService = Auth0Provider.initialize({
  domain,
  clientId,
  audience,
  useRefreshTokens: true,
  onRedirectCallback: (appState) => {
    window.location.replace(
      appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
  },
});

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async () => {
  api.defaults.headers.authorization = AuthService.bearer;
  AppState.user = AuthService.user;
  await accountService.getAccount();
});