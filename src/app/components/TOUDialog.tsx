// tslint:disable:max-line-length
import * as React from 'react';
import { Segment, Header, Button, Modal } from 'semantic-ui-react';
import { bind } from '../../util';

interface ITOUDialogState {
    visible: boolean;
}

export class TOUDialog extends React.Component<{}, ITOUDialogState> {
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
                <Modal.Header>LoopBox Terms of Use</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header attached="top">Acceptance of Terms</Header>
                        <Segment attached="bottom">
                            <p>The services that LoopBox provides to you are subject to the following Terms of Use ("TOU"). LoopBox reserves the right to update the TOU at any time without notice to you. The most current version of the TOU can be reviewed by clicking on the "Terms of Use" hypertext link located at the bottom of our main signin page.</p>
                        </Segment>
                        <Header attached="top">Description of Services</Header>
                        <Segment attached="bottom">
                            <p>Through its features, LoopBox provides you with access to a variety of resources ("Services"). The Services, including any updates, enhancements, new features, and/or the addition of any new Web properties, are subject to the TOU.</p>
                        </Segment>
                        <Header attached="top">Personal and Non-Commercial Use Limitation</Header>
                        <Segment attached="bottom">
                            <p>Unless otherwise specified, the Services are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Services.</p>
                        </Segment>
                        <Header attached="top">Privacy and Protection of Personal Information</Header>
                        <Segment attached="bottom">
                            <p>See the Privacy Statement disclosures relating to the collection and use of your information.</p>
                        </Segment>
                        <Header attached="top">Notice Specific to Software Available on this Website</Header>
                        <Segment attached="bottom">
                            <p>Any software that is made available to download from the Services ("Software") is the copyrighted work of LoopBox and/or its suppliers. Use of the Software is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software ("License Agreement"). An end user will be unable to install any Software that is accompanied by or includes a License Agreement, unless he or she first agrees to the License Agreement terms. Third party scripts or code, linked to or referenced from this website, are licensed to you by the third parties that own such code, not by LoopBox.</p>
                            <p>The Software is made available for download solely for use by end users according to the License Agreement. Any reproduction or redistribution of the Software not in accordance with the License Agreement is expressly prohibited by law, and may result in severe civil and criminal penalties. Violators will be prosecuted to the maximum extent possible.</p>
                            <p>WITHOUT LIMITING THE FOREGOING, COPYING OR REPRODUCTION OF THE SOFTWARE TO ANY OTHER SERVER OR LOCATION FOR FURTHER REPRODUCTION OR REDISTRIBUTION IS EXPRESSLY PROHIBITED, UNLESS SUCH REPRODUCTION OR REDISTRIBUTION IS EXPRESSLY PERMITTED BY THE LICENSE AGREEMENT ACCOMPANYING SUCH SOFTWARE.</p>
                            <p>THE SOFTWARE IS WARRANTED, IF AT ALL, ONLY ACCORDING TO THE TERMS OF THE LICENSE AGREEMENT. EXCEPT AS WARRANTED IN THE LICENSE AGREEMENT, LOOPBOX HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE SOFTWARE, INCLUDING ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, WHETHER EXPRESS, IMPLIED OR STATUTORY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. FOR YOUR CONVENIENCE, LOOPBOX MAY MAKE AVAILABLE AS PART OF THE SERVICES OR IN ITS SOFTWARE PRODUCTS, TOOLS AND UTILITIES FOR USE AND/OR DOWNLOAD. LOOPBOX DOES NOT MAKE ANY ASSURANCES WITH REGARD TO THE ACCURACY OF THE RESULTS OR OUTPUT THAT DERIVES FROM SUCH USE OF ANY SUCH TOOLS AND UTILITIES. PLEASE RESPECT THE INTELLECTUAL PROPERTY RIGHTS OF OTHERS WHEN USING THE TOOLS AND UTILITIES MADE AVAILABLE ON THE SERVICES OR IN LOOPBOX SOFTWARE.</p>
                            <p>RESTRICTED RIGHTS LEGEND. Any Software which is downloaded from the Services for or on behalf of the United States of America, its agencies and/or instrumentalities ("U.S. Government"), is provided with Restricted Rights. Use, duplication, or disclosure by the U.S. Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013 or subparagraphs (c)(1) and (2) of the Commercial Computer Software - Restricted Rights at 48 CFR 52.227-19, as applicable. Manufacturer is LoopBox.</p>
                        </Segment>
                        <Header attached="top">Notice Specific to Documents Available on this Website</Header>
                        <Segment attached="bottom">
                            <p>Permission to use Documents (such as white papers, press releases, datasheets and FAQs) from the Services is granted, provided that (1) the below copyright notice appears in all copies and that both the copyright notice and this permission notice appear, (2) use of such Documents from the Services is for informational and non-commercial or personal use only and will not be copied or posted on any network computer or broadcast in any media, and (3) no modifications of any Documents are made. Accredited educational institutions, such as K-12, universities, private/public colleges, and state community colleges, may download and reproduce the Documents for distribution in the classroom. Distribution outside the classroom requires express written permission. Use for any other purpose is expressly prohibited by law, and may result in severe civil and criminal penalties. Violators will be prosecuted to the maximum extent possible.</p>
                            <p>Documents specified above do not include the design or layout of the LoopBox website or any other LoopBox owned, operated, licensed or controlled site. Elements of the LoopBox website is protected by trade dress, trademark, unfair competition, and other laws and may not be copied or imitated in whole or in part. No logo, graphic, sound or image from any LoopBox website may be copied or retransmitted unless expressly permitted by LoopBox.</p>
                            <p>LOOPBOX AND/OR ITS RESPECTIVE SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION CONTAINED IN THE DOCUMENTS AND RELATED GRAPHICS PUBLISHED AS PART OF THE SERVICES FOR ANY PURPOSE. ALL SUCH DOCUMENTS AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. LOOPBOX AND/OR ITS RESPECTIVE SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, INCLUDING ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, WHETHER EXPRESS, IMPLIED OR STATUTORY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL LOOPBOX AND/OR ITS RESPECTIVE SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF INFORMATION AVAILABLE FROM THE SERVICES.</p>
                            <p>THE DOCUMENTS AND RELATED GRAPHICS PUBLISHED ON THE SERVICES COULD INCLUDE TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. LOOPBOX AND/OR ITS RESPECTIVE SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE PRODUCT(S) AND/OR THE PROGRAM(S) DESCRIBED HEREIN AT ANY TIME.</p>
                        </Segment>
                        <Header attached="top">Notices Regarding Software, Documents, and Services Available on this Website</Header>
                        <Segment attached="bottom">
                            <p>IN NO EVENT SHALL LOOPBOX AND/OR ITS RESPECTIVE SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF SOFTWARE, DOCUMENTS, PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR INFORMATION AVAILABLE FROM THE SERVICES.</p>
                        </Segment>
                        <Header attached="top">Member Account, Password, and Security</Header>
                        <Segment attached="bottom">
                            <p>If any of the Services requires you to open an account, you must complete the registration process by providing us with current, complete and accurate information as prompted by the applicable registration form. You also will choose a password and a user name. You are entirely responsible for maintaining the confidentiality of your password and account. Furthermore, you are entirely responsible for any and all activities that occur under your account. You agree to notify LoopBox immediately of any unauthorized use of your account or any other breach of security. LoopBox will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge. However, you could be held liable for losses incurred by LoopBox or another party due to someone else using your account or password. You may not use anyone else's account at any time, without the permission of the account holder.</p>
                        </Segment>
                        <Header attached="top">No Unlawful or Prohibited Use</Header>
                        <Segment attached="bottom">
                            <p>As a condition of your use of the Services, you will not use the Services for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Services in any manner that could damage, disable, overburden, or impair any LoopBox server, or the network(s) connected to any LoopBox server, or interfere with any other party's use and enjoyment of any Services. You may not attempt to gain unauthorized access to any Services, other accounts, computer systems or networks connected to any LoopBox server or to any of the Services, through hacking, password mining or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Services.</p>
                        </Segment>
                        <Header attached="top">Use of Services</Header>
                        <Segment attached="bottom">
                            <p>The Services may contain e-mail services, bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, photo albums, file cabinets and/or other message or communication facilities designed to enable you to communicate with others (each a "Communication Service" and collectively "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and, when applicable, related to the particular Communication Service. By way of example, and not as a limitation, you agree that when using the Communication Services, you will not:</p>
                            <p style={{ padding: '0em 2em' }}>
                                <p>PUse the Communication Services in connection with surveys, contests, pyramid schemes, chain letters, junk email, spamming or any duplicative or unsolicited messages (commercial or otherwise).</p>
                                <p>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</p>
                                <p>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, obscene, indecent or unlawful topic, name, material or information.</p>
                                <p>Upload, or otherwise make available, files that contain images, photographs, software or other material protected by intellectual property laws, including, by way of example, and not as limitation, copyright or trademark laws (or by rights of privacy or publicity) unless you own or control the rights thereto or have received all necessary consent to do the same.</p>
                                <p>Use any material or information, including images or photographs, which are made available through the Services in any manner that infringes any copyright, trademark, patent, trade secret, or other proprietary right of any party.</p>
                                <p>Upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another's computer or property of another.</p>
                                <p>Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Services specifically allows such messages.</p>
                                <p>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally reproduced, displayed, performed, and/or distributed in such manner.</p>
                                <p>Falsify or delete any copyright management information, such as author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</p>
                                <p>Restrict or inhibit any other user from using and enjoying the Communication Services.</p>
                                <p>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</p>
                                <p>Harvest or otherwise collect information about others, including e-mail addresses.</p>
                                <p>Violate any applicable laws or regulations.</p>
                                <p>Create a false identity for the purpose of misleading others.</p>
                                <p>Use, download or otherwise copy, or provide (whether or not for a fee) to a person or entity any directory of users of the Services or other user or usage information or any portion thereof.</p>
                            </p>
                            <p>LoopBox has no obligation to monitor the Communication Services. However, LoopBox reserves the right to review materials posted to the Communication Services and to remove any materials in its sole discretion. LoopBox reserves the right to terminate your access to any or all of the Communication Services at any time, without notice, for any reason whatsoever.</p>
                            <p>LoopBox reserves the right at all times to disclose any information as LoopBox deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in LoopBox's sole discretion.</p>
                            <p>Always use caution when giving out any personally identifiable information about yourself or your children in any Communication Services. LoopBox does not control or endorse the content, messages or information found in any Communication Services and, therefore, LoopBox specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Services. Managers and hosts are not authorized LoopBox spokespersons, and their views do not necessarily reflect those of LoopBox.</p>
                            <p>Materials uploaded to the Communication Services may be subject to posted limitations on usage, reproduction and/or dissemination; you are responsible for adhering to such limitations if you download the materials.</p>
                        </Segment>
                        <Header attached="top">Materials Provided to LoopBox or Posted at Any LoopBox Website</Header>
                        <Segment attached="bottom">
                            <p>LoopBox does not claim ownership of the materials you provide to LoopBox (including feedback and suggestions) or post, upload, input or submit to any Services or its associated services for review by the general public, or by the members of any public or private community, (each a "Submission" and collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting ("Posting") your Submission you are granting LoopBox, its affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses (including, without limitation, all LoopBox Services), including, without limitation, the license rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; to publish your name in connection with your Submission; and the right to sublicense such rights to any supplier of the Services.</p>
                            <p>No compensation will be paid with respect to the use of your Submission, as provided herein. LoopBox is under no obligation to post or use any Submission you may provide and LoopBox may remove any Submission at any time in its sole discretion.</p>
                            <p>By Posting a Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in these Terms of Use including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.</p>
                            <p>In addition to the warranty and representation set forth above, by Posting a Submission that contain images, photographs, pictures or that are otherwise graphical in whole or in part ("Images"), you warrant and represent that (a) you are the copyright owner of such Images, or that the copyright owner of such Images has granted you permission to use such Images or any content and/or images contained in such Images consistent with the manner and purpose of your use and as otherwise permitted by these Terms of Use and the Services, (b) you have the rights necessary to grant the licenses and sublicenses described in these Terms of Use, and (c) that each person depicted in such Images, if any, has provided consent to the use of the Images as set forth in these Terms of Use, including, by way of example, and not as a limitation, the distribution, public display and reproduction of such Images. By Posting Images, you are granting (a) to all members of your private community (for each such Images available to members of such private community), and/or (b) to the general public (for each such Images available anywhere on the Services, other than a private community), permission to use your Images in connection with the use, as permitted by these Terms of Use, of any of the Services, (including, by way of example, and not as a limitation, making prints and gift items which include such Images), and including, without limitation, a non-exclusive, world-wide, royalty-free license to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Images without having your name attached to such Images, and the right to sublicense such rights to any supplier of the Services. The licenses granted in the preceding sentences for a Images will terminate at the time you completely remove such Images from the Services, provided that, such termination shall not affect any licenses granted in connection with such Images prior to the time you completely remove such Images. No compensation will be paid with respect to the use of your Images.</p>
                        </Segment>
                        <Header attached="top">Notices and Procedure for Making Claims of Copyright Infringement</Header>
                        <Segment attached="bottom">
                            <p>Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be sent to Service Provider's Designated Agent. ALL INQUIRIES NOT RELEVANT TO THE FOLLOWING PROCEDURE WILL NOT RECEIVE A RESPONSE.</p>
                        </Segment>
                        <Header attached="top">Links to Third Party Sites</Header>
                        <Segment attached="bottom">
                            <p>THE LINKS IN THIS AREA WILL LET YOU LEAVE LOOPBOX'S SITE. THE LINKED SITES ARE NOT UNDER THE CONTROL OF LOOPBOX AND LOOPBOX IS NOT RESPONSIBLE FOR THE CONTENTS OF ANY LINKED SITE OR ANY LINK CONTAINED IN A LINKED SITE, OR ANY CHANGES OR UPDATES TO SUCH SITES. LOOPBOX IS NOT RESPONSIBLE FOR WEBCASTING OR ANY OTHER FORM OF TRANSMISSION RECEIVED FROM ANY LINKED SITE. LOOPBOX IS PROVIDING THESE LINKS TO YOU ONLY AS A CONVENIENCE, AND THE INCLUSION OF ANY LINK DOES NOT IMPLY ENDORSEMENT BY LOOPBOX OF THE SITE.</p>
                        </Segment>
                        <Header attached="top">Unsolicited Idea Submission Policy</Header>
                        <Segment attached="bottom">
                            <p>LOOPBOX OR ANY OF ITS EMPLOYEES DO NOT ACCEPT OR CONSIDER UNSOLICITED IDEAS, INCLUDING IDEAS FOR NEW ADVERTISING CAMPAIGNS, NEW PROMOTIONS, NEW PRODUCTS OR TECHNOLOGIES, PROCESSES, MATERIALS, MARKETING PLANS OR NEW PRODUCT NAMES. PLEASE DO NOT SEND ANY ORIGINAL CREATIVE ARTWORK, SAMPLES, DEMOS, OR OTHER WORKS. THE SOLE PURPOSE OF THIS POLICY IS TO AVOID POTENTIAL MISUNDERSTANDINGS OR DISPUTES WHEN LOOPBOX'S PRODUCTS OR MARKETING STRATEGIES MIGHT SEEM SIMILAR TO IDEAS SUBMITTED TO LOOPBOX. SO, PLEASE DO NOT SEND YOUR UNSOLICITED IDEAS TO LOOPBOX OR ANYONE AT LOOPBOX. IF, DESPITE OUR REQUEST THAT YOU NOT SEND US YOUR IDEAS AND MATERIALS, YOU STILL SEND THEM, PLEASE UNDERSTAND THAT LOOPBOX MAKES NO ASSURANCES THAT YOUR IDEAS AND MATERIALS WILL BE TREATED AS CONFIDENTIAL OR PROPRIETARY.</p>
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
