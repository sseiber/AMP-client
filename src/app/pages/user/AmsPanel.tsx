import * as React from 'react';
import { Grid, Button, Segment, Header, Message, Item } from 'semantic-ui-react';
import { AmsPanelListItem } from './AmsPanelListItem';

interface IAmsPanelProps {
    userDisplayName: string;
    amsAccounts: any[];
    onRegisterAmsAccountClicked: () => (void);
    onEditAmsAccountClicked: (amsAccount: any) => (void);
}

export class AmsPanel extends React.Component<IAmsPanelProps, any> {
    public render() {
        const {
            userDisplayName,
            amsAccounts,
            onRegisterAmsAccountClicked,
            onEditAmsAccountClicked
        } = this.props;

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header attached="top" as="h3" color={'blue'}>{`AMS registrations for ${userDisplayName}`}</Header>
                        <Segment attached="bottom">
                            {
                                amsAccounts.length > 0
                                    ? (
                                        <Item.Group divided>
                                            {
                                                amsAccounts.map((amsItem) => {
                                                    return (

                                                        <AmsPanelListItem
                                                            key={amsItem.id}
                                                            id={amsItem.id}
                                                            amsAadClientId={amsItem.amsAadClientId}
                                                            amsAadSecret={amsItem.amsAadSecret}
                                                            amsAadTenantId={amsItem.amsAadTenantId}
                                                            amsAccountName={amsItem.amsAccountName}
                                                            amsRegion={amsItem.amsRegion}
                                                            amsResourceGroup={amsItem.amsResourceGroup}
                                                            amsSubscriptionId={amsItem.amsSubscriptionId}
                                                            amsArmAadAudience={amsItem.amsArmAadAudience}
                                                            amsArmEndpoint={amsItem.amsArmEndpoint}
                                                            amsAadEndpoint={amsItem.amsAadEndpoint}
                                                            onEditAmsAccountClicked={onEditAmsAccountClicked}
                                                        />

                                                    );
                                                })
                                            }
                                        </Item.Group>
                                    )
                                    : (
                                        <Message warning>
                                            <Message.Header>No AMS accounts are registered</Message.Header>
                                            <p>Use the Azure Portal to get your AMS registration information and create a new registration here.</p>
                                        </Message>
                                    )
                            }
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button floated="right" size="small" color={'green'} onClick={onRegisterAmsAccountClicked}>Register an AMS account</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
