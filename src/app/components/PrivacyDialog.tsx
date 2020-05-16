// tslint:disable:max-line-length
import * as React from 'react';
import { Segment, Header, Button, Modal } from 'semantic-ui-react';
import { bind } from '../../util';

interface IPrivacyDialogState {
    visible: boolean;
}

export class PrivacyDialog extends React.Component<{}, IPrivacyDialogState> {
    constructor(props: any, context?: any) {
        super(props, context);

        this.state = {
            visible: false
        };
    }

    public doModal() {
        this.setState({
            visible: true
        });
    }

    public render() {
        const {
            visible
        } = this.state;

        return (
            <Modal open={visible} closeOnDimmerClick={false} onClose={this.onCloseModal}>
                <Modal.Header>LoopBox Privacy Statement</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>Your privacy is important to us. This privacy statement explains the personal data LoopBox processes, how LoopBox processes it, and for what purposes.</p>
                        <Header attached="top">Personal data we collect</Header>
                        <Segment attached="bottom">
                            <p>LoopBox collects data from you, through our interactions with you and through the product. You provide some of this data directly, and we get some of it by collecting data about your interactions, use, and experiences with the product. The data we collect depends on the context of your interactions with LoopBox and the choices you make and the product features you use.</p>
                            <p>You have choices when it comes to the technology you use and the data you share. When we ask you to provide personal data, you can decline. Many of our products require some personal data to provide you with a service. If you choose not to provide data necessary to provide you with a feature, you cannot use that feature. Where providing the data is optional, and you choose not to share personal data, features like personalization that use such data will not work for you.</p>
                        </Segment>
                        <Header attached="top">How we use personal data</Header>
                        <Segment attached="bottom">
                            <p>LoopBox uses the data we collect to provide you with rich, interactive experiences. In particular, we use data to:</p>
                            <p style={{ padding: '0em 2em' }}>
                                <p>Provide LoopBox, which includes updating, securing, and troubleshooting, as well as providing support. It also includes sharing data, when it is required to provide the service or carry out the transactions you request.</p>
                                <p>Improve and develop our products.</p>
                                <p>Personalize our products and make recommendations.</p>
                                <p>We also use the data to operate our business, which includes analyzing our performance, meeting our legal obligations, developing our workforce, and doing research.</p>
                            </p>
                            <p>In carrying out these purposes, we combine data we collect from different contexts (for example, from your use of LoopBox) or obtain from third parties to give you a more seamless, consistent, and personalized experience, to make informed business decisions, and for other legitimate purposes.</p>
                        </Segment>
                        <Header attached="top">Reasons we share personal data</Header>
                        <Segment attached="bottom">
                            <p>We share your personal data with your consent or to complete any transaction you have requested or authorized. We also share data with LoopBox affiliates and subsidiaries; with vendors working on our behalf; when required by law or to respond to legal process; to protect our customers; to protect lives; to maintain the security of our products; and to protect the rights and property of LoopBox and its customers.</p>
                        </Segment>
                        <Header attached="top">How to access and control your personal data</Header>
                        <Segment attached="bottom">
                            <p>You can also make choices about the collection and use of your data by LoopBox. You can control your personal data that LoopBox has obtained, and exercise your data protection rights, by using various tools we provide. In some cases, your ability to access or control your personal data will be limited, as required or permitted by applicable law. How you can access or control your personal data will also depend on which features you use.</p>
                            <p>You can access and clear your data through features in LoopBox.</p>
                        </Segment>
                        <Header attached="top">Cookies and similar technologies</Header>
                        <Segment attached="bottom">
                            <p>Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing and honoring your preferences and settings, enabling you to sign in, combating fraud, analyzing how our products perform, and fulfilling other legitimate purposes.</p>
                            <p>You have a variety of tools to control the data collected by cookies, web beacons, and similar technologies. For example, you can use controls in your internet browser to limit how the websites you visit are able to use cookies and to withdraw your consent by clearing or blocking cookies.</p>
                        </Segment>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={this.onCloseModal}>
                        Back
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }

    @bind
    private onCloseModal(e: any) {
        this.setState({
            visible: false
        });
    }
}
// tslint:enable:max-line-length
