import * as React from 'react';
import { Message, Grid } from 'semantic-ui-react';
import { SessionStore, AmsStore } from '../../stores';
import { observer, inject } from 'mobx-react';
import { bind } from '../../../util';
import { AmsPanel } from './AmsPanel';

interface IUserProps {
    sessionStore: SessionStore;
    amsStore: AmsStore;
    history: any;
}

@inject('sessionStore', 'amsStore') @observer
export class UserPage extends React.Component<IUserProps, {}> {
    public componentDidMount() {
        const {
            sessionStore,
            amsStore
        } = this.props;

        amsStore.getUserAmsAccounts();
    }

    public render() {
        const {
            sessionStore,
            amsStore
        } = this.props;

        const userDisplayName = sessionStore.displayName ? sessionStore.displayName : 'Ams User';
        const userLinkUriProps = `?uid=${sessionStore.userId}`;

        return (
            <Grid style={{ padding: '5em 5em' }}>
                <Grid.Row>
                    <Grid.Column>
                        <Message size={'huge'} info>
                            <Message.Header>AMP Client</Message.Header>
                            <p>Registered AMS Accounts</p>
                        </Message>
                        <AmsPanel
                            userDisplayName={userDisplayName}
                            userLinkUriProps={userLinkUriProps}
                            amsAccounts={amsStore.amsAccounts}
                            onRegisterAmsAccountClicked={this.onRegisterAmsAccountClicked}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    @bind
    private onRegisterAmsAccountClicked(e: any) {
        const {
            history
        } = this.props;

        e.preventDefault();

        history.push('/registeramsaccount');
    }
}
