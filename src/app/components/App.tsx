import * as React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Menu, Grid, Image, Dropdown, Icon } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import {
    parse as qsParse,
    stringify as qsStringify
} from 'query-string';
import { AuthenticationState, SessionStore, AmsStore } from '../stores';
import { AuthenticatedRoute } from './AuthenticatedRoute';
import { ErrorDialog } from './ErrorDialog';
import { HomePage } from '../pages/HomePage';
import { AmpPlayerPage } from '../pages/AmpPlayerPage';
import { UserPage } from '../pages/user/UserPage';
import { RegisterAmsAccountPage } from '../pages/RegisterAmsAccountPage';
import { PrivacyDialog } from './PrivacyDialog';
import { TOUDialog } from './TOUDialog';
import { bind } from '../../util';

interface IAppProps {
    sessionStore: SessionStore;
    amsStore: AmsStore;
    location: any;
    history: any;
}

@inject('sessionStore', 'amsStore') @observer
export class AppComponent extends React.Component<IAppProps, {}> {
    private privacyDialog: PrivacyDialog;
    private touDialog: TOUDialog;

    public componentDidMount() {
        const {
            sessionStore,
            amsStore,
            history,
            location
        } = this.props;

        let redirectPath = location.pathname;

        if (sessionStore.authenticationState === AuthenticationState.Authenticated) {
            if (location.search) {
                const query = qsParse(location.search);

                redirectPath = query.redirectPath || `${redirectPath}${location.search}`;
            }

            history.push(redirectPath);
        }
        else {
            sessionStore.redirectPath = location.pathname;
        }
    }

    public render() {
        const {
            location,
            sessionStore
        } = this.props;

        let logoMenuTitle = `AMP Client`;
        let logoMenuLink = `/ampplayer`;
        if (sessionStore.authenticationState === AuthenticationState.Authenticated) {
            logoMenuTitle = `AMP Client`;
            logoMenuLink = `/ampplayer`;
        }

        let userNavItem;

        if (sessionStore.authenticationState === AuthenticationState.Authenticated) {
            const trigger = (
                <span>
                    <Icon name={'user'} /> {sessionStore.displayName}
                </span>
            );

            userNavItem = (
                <Dropdown item trigger={trigger}>
                    <Dropdown.Menu>
                        < Dropdown.Item href="/api/v1/auth/profile">
                            <Icon name="edit" />
                            <span>&nbsp;&nbsp;Edit profile</span>
                        </Dropdown.Item>
                        {
                            sessionStore.role === 'admin'
                                ? (
                                    <Dropdown.Item as={Link} to={`/admin`}>
                                        <Icon name="user secret" />
                                        <span>&nbsp;&nbsp;Admin options</span>
                                    </Dropdown.Item>
                                )
                                : null
                        }
                        < Dropdown.Item href="/api/v1/auth/signout">
                            <Icon name="sign out alternate" />
                            <span>&nbsp;&nbsp;Sign out</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >
            );
        }
        else {
            userNavItem = (
                <Menu.Item href="/api/v1/auth/signin">
                    <Icon name="sign in alternate" />
                    <span>&nbsp;&nbsp;Sign in</span>
                </Menu.Item>
            );
        }

        return (
            <div>
                {/* {PRODUCTION ? null : <DevTools />} */}
                <Menu fixed="top" inverted color="grey" style={{ padding: '0em 5em' }}>
                    <Menu.Item as={Link} to={logoMenuLink} header>
                        <Image size="mini" src={`/assets/applogo50.png`} style={{ marginRight: '1.5em' }} />
                        {logoMenuTitle}
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {userNavItem}
                    </Menu.Menu>
                </Menu>
                <Grid>
                    <Grid.Column>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/ampplayer" component={AmpPlayerPage} />
                            <AuthenticatedRoute exact path="/user" component={UserPage} />
                            <AuthenticatedRoute exact path="/registeramsaccount" component={RegisterAmsAccountPage} />
                            <Redirect from={location.pathname} to="/" />
                            {this.props.children}
                        </Switch>
                        <ErrorDialog />
                    </Grid.Column>
                </Grid>
                <Menu fixed="bottom" inverted color="grey" style={{ padding: '1em 5em' }}>
                    <Menu.Item onClick={this.onPrivacyDialogClicked} header>
                        Privacy & cookies
                    </Menu.Item>
                    <Menu.Item onClick={this.onTOUDialogClicked} header>
                        Terms of use
                    </Menu.Item>
                </Menu>
                <PrivacyDialog ref={r => this.privacyDialog = r} />
                <TOUDialog ref={r => this.touDialog = r} />
            </div>
        );
    }

    @bind
    private onPrivacyDialogClicked(e: any) {
        this.privacyDialog.doModal();
    }

    @bind
    private onTOUDialogClicked(e: any) {
        this.touDialog.doModal();
    }
}
