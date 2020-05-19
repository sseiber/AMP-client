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
            ...editAccount,
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
                                        <label>AMS AAD Client Id</label>
                                        <Input
                                            id="amsAadClientId"
                                            placeholder="Enter AMS AAD Client Id"
                                            value={amsAadClientId}
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
                            <Grid.Column width={8}>
                                <Form>
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
                                        <label>AMS Account ARM amsArmEndpoint</label>
                                        <Input
                                            id="amsArmEndpoint"
                                            placeholder="Enter AMS Account ARM Endpoint"
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
