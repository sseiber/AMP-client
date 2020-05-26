import * as React from 'react';
import { Modal, Form, Input, Grid } from 'semantic-ui-react';
import { ModalDialog } from './ModalDialog';
import { bind } from '../../utils';

interface IRegisterAmsAccountDialogState {
    modalName: string;
    id: string;
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
    valid: boolean;
    visible: boolean;
    onDialogCompletion: (amsAccount: any) => void;
}

export class RegisterAmsAccountDialog extends React.Component<any, IRegisterAmsAccountDialogState> {
    constructor(props: any, context?: any) {
        super(props, context);

        this.state = {
            modalName: 'Register AMS Account',
            id: '',
            amsAadClientId: '',
            amsAadSecret: '',
            amsAadTenantId: '',
            amsAccountName: '',
            amsRegion: '',
            amsResourceGroup: '',
            amsSubscriptionId: '',
            amsArmAadAudience: '',
            amsArmEndpoint: '',
            amsAadEndpoint: '',
            valid: false,
            visible: false,
            onDialogCompletion: null
        };
    }

    public doModal(onDialogCompletion: (updatedAccount: any) => void, modalName: string, editAccount?: any) {
        this.setState({
            modalName,
            ...(editAccount
                ? editAccount
                : {
                    id: '',
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
                }
            ),
            valid: false,
            visible: true,
            onDialogCompletion
        });
    }

    public render() {
        const {
            modalName,
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint,
            valid,
            visible
        } = this.state;

        return (
            <ModalDialog
                open={visible}
                size={'large'}
                valid={valid}
                onOk={this.onOk}
                onCancel={this.onCancel}
            >
                <Modal.Header>{modalName}</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Form>
                                    <Form.Field>
                                        <label>Account Name</label>
                                        <Input
                                            id="amsAccountName"
                                            placeholder="Enter Account Name"
                                            value={amsAccountName}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Account Resource Group</label>
                                        <Input
                                            id="amsResourceGroup"
                                            placeholder="Enter Account Resource Group"
                                            value={amsResourceGroup}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>AAD Client Id</label>
                                        <Input
                                            id="amsAadClientId"
                                            placeholder="Enter AAD Client Id"
                                            value={amsAadClientId}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>AAD Tenant Id</label>
                                        <Input
                                            id="amsAadTenantId"
                                            placeholder="Enter AAD Tenant Id"
                                            value={amsAadTenantId}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>ARM AAD Audience</label>
                                        <Input
                                            id="amsArmAadAudience"
                                            placeholder="Enter ARM AAD Audience"
                                            value={amsArmAadAudience}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Form>
                                    <Form.Field>
                                        <label>Account Location</label>
                                        <Input
                                            id="amsRegion"
                                            placeholder="Enter Account Location"
                                            value={amsRegion}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Account Subscription Id</label>
                                        <Input
                                            id="amsSubscriptionId"
                                            placeholder="Enter Account Subscription Id"
                                            value={amsSubscriptionId}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>AAD Client Secret</label>
                                        <Input
                                            id="amsAadSecret"
                                            placeholder="Enter AAD Client Secret"
                                            value={amsAadSecret}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>AAD Endpoint</label>
                                        <Input
                                            id="amsAadEndpoint"
                                            placeholder="Enter AAD Endpoint"
                                            value={amsAadEndpoint}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>ARM Endpoint</label>
                                        <Input
                                            id="amsArmEndpoint"
                                            placeholder="Enter ARM Endpoint"
                                            value={amsArmEndpoint}
                                            onChange={this.onFieldChange}
                                        />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </ModalDialog>
        );
    }

    @bind
    private onFieldChange(e: any) {
        const {
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint,
            onDialogCompletion
        } = this.state;

        const fieldState: any = {
            [e.target.id]: e.target.value
        };

        const fields = {
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint,
            ...fieldState
        };

        const valid = (fields.amsAadClientId.length > 0
            && fields.amsAadSecret.length > 0
            && fields.amsAadTenantId.length > 0
            && fields.amsAccountName.length > 0
            && fields.amsRegion.length > 0
            && fields.amsResourceGroup.length > 0
            && fields.amsSubscriptionId.length > 0
            && fields.amsArmAadAudience.length > 0
            && fields.amsArmEndpoint.length > 0
            && fields.amsAadEndpoint.length > 0);

        this.setState({
            ...fieldState,
            valid
        });
    }

    @bind
    private onOk(e: any) {
        const {
            id,
            amsAadClientId,
            amsAadSecret,
            amsAadTenantId,
            amsAccountName,
            amsRegion,
            amsResourceGroup,
            amsSubscriptionId,
            amsArmAadAudience,
            amsArmEndpoint,
            amsAadEndpoint,
            onDialogCompletion
        } = this.state;

        onDialogCompletion({
            id,
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

        this.setState({
            visible: false
        });
    }

    @bind
    private onCancel(e: any) {
        this.setState({
            visible: false
        });
    }
}
