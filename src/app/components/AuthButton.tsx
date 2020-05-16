import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { SessionStore, AuthenticationState } from '../stores';
import { observer, inject } from 'mobx-react';

interface IAuthButton {
    sessionStore: SessionStore;
    location: any;
}

@inject('sessionStore') @observer
export class AuthenticationButton extends React.Component<IAuthButton, any> {
    public render() {
        const {
            sessionStore,
            location
        } = this.props;

        let authenticationButton;

        switch (sessionStore.authenticationState) {
            case AuthenticationState.Authenticated:
                authenticationButton = (
                    <Menu.Item href="/api/v1/auth/signout">
                        <Icon name="sign in alternate" />
                        <span>&nbsp;&nbsp;Sign out</span>
                    </Menu.Item>
                );
                break;

            case AuthenticationState.Unauthenticated:
            case AuthenticationState.CouldNotAuthenticate:
                authenticationButton = (
                    <Menu.Item href="/api/v1/auth/signin?redirectPath=/user">
                        <Icon name="sign in alternate" />
                        <span>&nbsp;&nbsp;Sign in</span>
                    </Menu.Item>
                );
                break;

            case AuthenticationState.Authenticating:
                authenticationButton = (
                    <Menu.Item disabled>Signing in...</Menu.Item>
                );
                break;
        }

        return authenticationButton;
    }
}
