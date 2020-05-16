import { action, observable, runInAction } from 'mobx';
import { fetchUserSession } from '../../api/Session';

export enum AuthenticationState {
    Authenticated = 'Authenticated',
    Unauthenticated = 'Unauthenticated',
    Authenticating = 'Authenticating',
    CouldNotAuthenticate = 'CouldNotAuthenticate'
}

export class SessionStore {
    public static displayName = 'sessionStore';

    @observable
    public authenticationState: AuthenticationState;

    @observable
    public role: string;

    @observable
    public userId: string;

    @observable
    public displayName: string;

    @observable
    public email: string;

    @observable
    public authProvider: string;

    @observable
    public redirectPath: string;

    public get isProduction() {
        return process.env.NODE_ENV === 'production';
    }

    @action
    public async signin() {
        this.authenticationState = AuthenticationState.Authenticating;

        try {
            const response = await fetchUserSession();

            runInAction('fetchUserSession', () => {
                if (response.statusCode === 200) {
                    this.authenticationState = AuthenticationState.Authenticated;
                    this.role = response.body.role;
                    this.userId = response.body.userId;
                    this.displayName = response.body.displayName;
                    this.email = response.body.email;
                    this.authProvider = response.body.authProvider;

                    return;
                }

                this.authenticationState = AuthenticationState.CouldNotAuthenticate;
            });
        }
        catch (error) {
            runInAction('fetchUserSessionFailed', () => {
                this.authenticationState = AuthenticationState.CouldNotAuthenticate;
            });
        }
    }
}
