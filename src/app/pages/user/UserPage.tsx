import * as React from 'react';
import { Message, Grid } from 'semantic-ui-react';
import { SessionStore, AmsStore, ErrorStore } from '../../stores';
import { observer, inject } from 'mobx-react';
import { bind } from '../../../utils';
import { AmsPanel } from './AmsPanel';
import { RegisterAmsAccountDialog } from '../../components/RegisterAmsAccountDialog';

interface IUserProps {
    sessionStore: SessionStore;
    amsStore: AmsStore;
    errorStore: ErrorStore;
    history: any;
}

@inject('sessionStore', 'amsStore', 'errorStore') @observer
export class UserPage extends React.Component<IUserProps, {}> {
    private registerAmsAccountDialog: RegisterAmsAccountDialog;

    public async componentDidMount() {
        const {
            sessionStore,
            amsStore
        } = this.props;

        await amsStore.getUserAmsAccounts();
    }

    public render() {
        const {
            sessionStore,
            amsStore
        } = this.props;

        const userDisplayName = sessionStore.displayName ? sessionStore.displayName : 'Ams User';

        return (
            <div>
                <Grid style={{ padding: '5em 5em' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <Message size={'huge'} info>
                                <Message.Header>AMP Client</Message.Header>
                                <p>Registered AMS Accounts</p>
                            </Message>
                            <AmsPanel
                                userDisplayName={userDisplayName}
                                amsAccounts={amsStore.amsAccounts}
                                onRegisterAmsAccountClicked={this.onRegisterAmsAccountClicked}
                                onEditAmsAccountClicked={this.onEditAmsAccountClicked}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <RegisterAmsAccountDialog ref={r => this.registerAmsAccountDialog = r} />
            </div>
        );
    }

    @bind
    private onRegisterAmsAccountClicked() {
        this.registerAmsAccountDialog.doModal(this.onRegisterAmsAccountDialogCompletion, 'Register AMS Account', {});
    }

    @bind
    private onEditAmsAccountClicked(amsAccount: any) {
        this.registerAmsAccountDialog.doModal(this.onRegisterAmsAccountDialogCompletion, 'Edit AMS Account', amsAccount);
    }

    @bind
    private async onRegisterAmsAccountDialogCompletion(amsAccount: any) {
        const {
            amsStore,
            errorStore
        } = this.props;

        let errorMessage;

        try {
            const result = await amsStore.setUserAmsAccount(amsAccount);
            if (!result) {
                errorMessage = `Error while trying to update the user AMS account`;
            }
        }
        catch (error) {
            errorMessage = error.message;
        }

        if (errorMessage) {
            errorStore.showError(
                'Account Registration Error',
                errorMessage
            );
        }
    }
}
