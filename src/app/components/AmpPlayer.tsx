import * as React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { bind } from '../../utils';
import moment from 'moment';

interface IAmpPlayerProps {
    sourceUrl: string;
    startTime: string;
    skin?: string;
    onVideoStarted: () => void;
    onVideoEnded: () => void;
    onVideoError: (error: string) => void;
}

interface IAmpPlayerState {
    videoLoaded: boolean;
}

const ampPlayerStyle = 'https://amp.azure.net/libs/amp/2.3.4/skins/###SKIN/azuremediaplayer.min.css';
const ampPlayerUrl = 'https://amp.azure.net/libs/amp/2.3.4/azuremediaplayer.min.js';

export class AmpPlayer extends React.Component<IAmpPlayerProps, IAmpPlayerState> {
    public static defaultProps = {
        skin: 'amp-default'
    };

    private ampPlayerInternal: any;
    private videoElement: any = React.createRef();

    constructor(props: any, context?: any) {
        super(props, context);

        this.ampPlayerInternal = null;

        this.state = {
            videoLoaded: false
        };
    }

    public get ampPlayer() {
        return this.ampPlayerInternal;
    }

    public setPlayerSize(clientRect: any) {
        if (this.ampPlayerInternal) {
            this.ampPlayerInternal.c.width = clientRect.width;
            this.ampPlayerInternal.c.height = clientRect.height;
        }
    }

    public async componentDidMount() {
        const {
            sourceUrl,
            startTime,
            skin
        } = this.props;

        await this.loadScript(ampPlayerUrl, skin);

        const ampOptions = {
            techOrder: ['azureHtml5JS', 'html5FairPlayHLS', 'html5'],
            wallClockDisplaySettings: {
                enabled: true,
                useLocalTimeZone: true
            },
            nativeControlsForTouch: false,
            autoplay: false,
            controls: true,
            fluid: true
            // width: '640',
            // height: '400',
        };

        this.ampPlayerInternal = await this.createAmpPlayer(ampOptions);

        this.ampPlayerInternal.src([
            {
                src: `${sourceUrl}(starttime=${startTime},endtime=${moment(startTime).add(1, 'minute').toISOString()})`,
                type: 'application/vnd.ms-sstr+xml',
                // type: 'video/mp4',
                disableUrlRewriter: false
            }
        ]);

        // this.ampPlayerInternal.play();

        this.setState({
            videoLoaded: true
        });
    }

    public render() {
        const {
            sourceUrl
        } = this.props;

        const {
            videoLoaded
        } = this.state;

        return (
            <div className="amp-player-container">
                <Dimmer active={!videoLoaded} inverted>
                    <Loader size="large">
                        <p>Connecting to video stream...</p>
                    </Loader>
                </Dimmer>
                <video
                    id="amp-player"
                    ref={this.videoElement}
                    className="azuremediaplayer amp-default-skin"
                    style={{ width: '100%' }}
                />
            </div>
        );
    }

    @bind
    private async loadScript(url: string, skin: string): Promise<void> {
        return new Promise((resolve) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = ampPlayerStyle.replace('###SKIN', skin);
            document.head.insertBefore(link, document.head.firstChild);

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.async = false;

            script.onload = () => {
                return resolve();
            };

            document.body.appendChild(script);
        });
    }

    private async createAmpPlayer(options: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const player = window['amp'](
                    this.videoElement.current, options, () => {
                        player.addEventListener('playing', this.videoStarted);
                        player.addEventListener('ended', this.videoEnded);
                        player.addEventListener('error', this.videoError);

                        resolve(player);
                    });
            }
            catch (ex) {
                reject(new Error(`An error occurred trying to create the Azure Media Player control: ${ex.message}`));
            }
        });
    }

    @bind
    private videoStarted() {
        const {
            onVideoStarted
        } = this.props;

        onVideoStarted();
    }

    @bind
    private videoEnded() {
        const {
            onVideoEnded
        } = this.props;

        onVideoEnded();
    }

    @bind
    private videoError() {
        const {
            onVideoError
        } = this.props;

        const error = this.ampPlayerInternal.error();
        onVideoError(error);

        return;
    }

    @bind
    private onSourceEstablished(source: any) {
        return;
    }

    @bind
    private onSourceCompleted(source: any) {
        return;
    }
}
