import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationState, SessionStore } from '../stores';

interface IAuthenticatedRoute {
    sessionStore?: SessionStore;
    exact?: boolean;
    path: string;
    component: React.ComponentClass;
}

@inject('sessionStore') @observer
export class AuthenticatedRoute extends React.Component<IAuthenticatedRoute, any> {
    public render() {
        const {
            sessionStore,
            exact,
            path,
            component
        } = this.props;

        if (sessionStore.authenticationState === AuthenticationState.Authenticated) {
            return (
                <Route component={component} exact={exact} path={path} />
            );
        }

        return (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}
