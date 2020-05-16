import * as React from 'react';
import { Grid, Message, Dimmer, Loader } from 'semantic-ui-react';
import { AmsStore } from '../stores';
import { AmpPlayer } from '../components/AmpPlayer';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import { parse as qsParse } from 'query-string';
import { bind } from '../../util';

interface IAmpPlayerPage {
    amsStore: AmsStore;
    location: any;
}

interface IAmpPlayerPageState {
    videoLoaded: boolean;
}

@inject('amsStore') @observer
export class AmpPlayerPage extends React.Component<IAmpPlayerPage, IAmpPlayerPageState> {
    constructor(props: any, context?: any) {
        super(props, context);

        this.state = {
            videoLoaded: false
        };
    }

    public async componentDidMount() {
        const {
            amsStore,
            location
        } = this.props;

        if (location.search) {
            const query = qsParse(location.search);
            if (query?.an) {
                const assetName = query.an as string;
                const streamingStartTime = moment(query.st as string).toISOString() || moment(0).toISOString();

                await amsStore.createAmsStreamingLocator(assetName, streamingStartTime);
            }
        }
    }

    public render() {
        const {
            amsStore
        } = this.props;

        const dateHeader = moment.utc(amsStore.streamingStartTime).format('dddd, MMMM Do YYYY h:mm:ss a');

        return (
            <Grid style={{ padding: '5em 5em' }}>
                <Grid.Row>
                    <Grid.Column>
                        <Message size="huge">
                            <Message.Header>{`${dateHeader} UTC`}</Message.Header>
                            <p />
                            {this.getAmpPlayerComponent()}
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    private getAmpPlayerComponent() {
        const {
            amsStore
        } = this.props;

        const sourceItem = amsStore.streamingLocatorFormats.find((item) => item.protocol === 'SmoothStreaming');
        if (sourceItem) {
            return (
                <AmpPlayer
                    sourceUrl={sourceItem.streamingLocatorUrl}
                    startTime={amsStore.streamingStartTime}
                    onVideoStarted={this.onVideoStarted}
                    onVideoEnded={this.onVideoEnded}
                    onVideoError={this.onVideoError}
                />
            );
        }

        return null;
    }

    @bind
    private onVideoLoaded() {
        this.setState({
            videoLoaded: true
        });
    }

    @bind
    private onVideoStarted() {
        return;
    }

    @bind
    private onVideoEnded() {
        return;
    }

    @bind
    private onVideoError(error: string) {
        return;
    }
}
