import * as React from 'react';
import { Grid, Header, Button, Form, Input, Label, SemanticCOLORS } from 'semantic-ui-react';
import { SessionStore, AmsStore, ErrorStore } from '../stores';
import { observer, inject } from 'mobx-react';
import { bind } from '../../util';

interface IRegisterAmsAccountPageProps {
    sessionStore: SessionStore;
    amsStore: AmsStore;
    errorStore: ErrorStore;
    history: any;
}

interface IRegisterAmsAccountPageState {
    iotcScopeId: string;
    amsAadClientId: string;
    amsAadSecret: string;
    amsAadTenantId: string;
    amsAccountName: string;
    amsRegion: string;
    amsResourceGroup: string;
    amsSubscriptionId: string;
    amsArmAadAudience: string;
    amsArmEndpoint: string;
    amsAadEndpoint: string;
}

@inject('sessionStore', 'amsStore', 'errorStore') @observer
export class RegisterAmsAccountPage extends React.Component<IRegisterAmsAccountPageProps, IRegisterAmsAccountPageState> {
    constructor(props: IRegisterAmsAccountPageProps) {
        super(props);

        this.state = {
            iotcScopeId: '',
            amsAadClientId: '',
            amsAadSecret: '',
            amsAadTenantId: '',
            amsAccountName: '',
            amsRegion: '',
            amsResourceGroup: '',
            amsSubscriptionId: '',
            amsArmAadAudience: '',
            amsArmEndpoint: '',
            amsAadEndpoint: ''
        };
    }

    public render() {
        const {
            iotcScopeId,
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint
        } = this.state;

        const validRegistration = (iotcScopeId.length > 0
            && amsAadClientId.length > 0
            && amsAadSecret.length > 0
            && amsAadTenantId.length > 0
            && amsAccountName.length > 0
            && amsRegion.length > 0
            && amsResourceGroup.length > 0
            && amsSubscriptionId.length > 0
            && amsArmAadAudience.length > 0
            && amsArmEndpoint.length > 0
            && amsAadEndpoint.length > 0);

        return (
            <Grid style={{ padding: '5em 5em' }}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Register an AMS Account</Header>
                        <Form>
                            <Form.Field>
                                <label>IoT Central App Scope Id</label>
                                <Input
                                    id="iotcScopeId"
                                    placeholder="Enter ScopeId"
                                    value={iotcScopeId}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS AAD Client Id</label>
                                <Input
                                    id="amsAadClientId"
                                    placeholder="Enter AMS AAD Client Id"
                                    value={amsAadClientId}
                                    onChange={this.onFieldChange}
                                    allow-1password="no"
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS AAD Secret</label>
                                <Input
                                    id="amsAadSecret"
                                    placeholder="Enter AMS AAD Secret"
                                    value={amsAadSecret}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS AAD Tenant Id</label>
                                <Input
                                    id="amsAadTenantId"
                                    placeholder="Enter AMS AAD Tenant Id"
                                    value={amsAadTenantId}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account Name</label>
                                <Input
                                    id="amsAccountName"
                                    placeholder="Enter AMS Account Name"
                                    value={amsAccountName}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account Region</label>
                                <Input
                                    id="amsRegion"
                                    placeholder="Enter AMS Account Region"
                                    value={amsRegion}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account Resource Group</label>
                                <Input
                                    id="amsResourceGroup"
                                    placeholder="Enter AMS Account Resource Group"
                                    value={amsResourceGroup}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account Subscription Id</label>
                                <Input
                                    id="amsSubscriptionId"
                                    placeholder="Enter AMS Account Subscription Id"
                                    value={amsSubscriptionId}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account AAD Audience</label>
                                <Input
                                    id="amsArmAadAudience"
                                    placeholder="Enter AMS Account AAD Audience"
                                    value={amsArmAadAudience}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account ARM amsArmEndpoint</label>
                                <Input
                                    id="amsArmEndpoint"
                                    placeholder="Enter AMS Account ARM Endpoint"
                                    value={amsArmEndpoint}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>AMS Account AAD Endpoint</label>
                                <Input
                                    id="amsAadEndpoint"
                                    placeholder="Enter AMS Account AAD Endpoint"
                                    value={amsAadEndpoint}
                                    onChange={this.onFieldChange}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button
                            floated="right"
                            size="small"
                            color="green"
                            disabled={!validRegistration}
                            onClick={this.onRegisterAmsAccount}
                        >
                            Register Account
                        </Button>
                        <Button
                            floated="right"
                            size="small"
                            color="green"
                            onClick={this.onCancelRegistration}
                        >
                            Cancel
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    @bind
    private onFieldChange(e: any) {
        const state: any = {
            [e.target.id]: e.target.value
        };

        this.setState(state);
    }

    @bind
    private async onRegisterAmsAccount(e: any) {
        const {
            amsStore,
            errorStore,
            history
        } = this.props;

        const {
            iotcScopeId,
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint
        } = this.state;

        let errorMessage;

        try {
            const result = await amsStore.setUserAmsAccount({
                iotcScopeId,
                amsAadClientId,
                amsAadSecret,
                amsAadTenantId,
                amsAccountName,
                amsRegion,
                amsResourceGroup,
                amsSubscriptionId,
                amsArmAadAudience,
                amsArmEndpoint,
                amsAadEndpoint
            });

            if (result) {
                history.push('/user');
            }
            else {
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

    @bind
    private onCancelRegistration(e: any) {
        const {
            history
        } = this.props;

        e.preventDefault();

        history.goBack();
    }
}
