import * as React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import { SessionStore, AuthenticationState } from '../stores';
import { observer, inject } from 'mobx-react';

interface IHomePage {
    sessionStore: SessionStore;
}

@inject('sessionStore') @observer
export class HomePage extends React.Component<IHomePage, {}> {
    public render() {
        const {
            sessionStore
        } = this.props;

        const message = sessionStore.authenticationState === AuthenticationState.Authenticated ?
            'AMP Client' :
            'Sign in to continue...';

        return (
            <Grid style={{ padding: '5em 5em' }}>
                <Grid.Row>
                    <Grid.Column>
                        <Message size="huge">
                            <Message.Header>AMP Client</Message.Header>
                            <p>{message}</p>
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
