import * as React from 'react';
import { Button, Item, Label, Grid } from 'semantic-ui-react';

interface IAmsPanelListItemProps {
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

export class AmsPanelListItem extends React.Component<IAmsPanelListItemProps, {}> {
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
        } = this.props;

        return (
            <Item>
                <Item.Image
                    size="tiny"
                    src={`/assets/applogo50.png`}
                />

                <Item.Content>
                    <Item.Header>{`Azure Media Account: ${amsAccountName}`}</Item.Header>
                    <Item.Description>{`\u00a0`}</Item.Description>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Item.Meta>
                                    <span><strong>AAD Client Id:</strong>{`\u00a0\u00a0${amsAadClientId}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>AAD Tenant Id:</strong>{`\u00a0\u00a0${amsAadTenantId}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong> Subscription Id:</strong>{`\u00a0\u00a0${amsSubscriptionId}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>ARM AAD Audience:</strong>{`\u00a0\u00a0${amsArmAadAudience}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>AAD Endpoint:</strong>{`\u00a0\u00a0${amsAadEndpoint}`}</span>
                                </Item.Meta>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item.Meta>
                                    <span><strong>AAD Secret:</strong>{`\u00a0\u00a0${amsAadSecret}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>Region:</strong>{`\u00a0\u00a0${amsRegion}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>ResourceGroup:</strong>{`\u00a0\u00a0${amsResourceGroup}`}</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span><strong>ARM Endpoint:</strong>{`\u00a0\u00a0${amsArmEndpoint}`}</span>
                                </Item.Meta>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Item.Extra>
                                    <Label icon="computer" content={`Scope Id: ${iotcScopeId}`} />
                                </Item.Extra>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item.Extra>
                                    <Button floated={'right'} size={'mini'}>Edit</Button>
                                </Item.Extra>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Item.Content>
            </Item>
        );
    }
}
