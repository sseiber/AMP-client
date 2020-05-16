import { action, observable, runInAction } from 'mobx';
import { DataStore, StoreEvents, ErrorTypes } from '.';
import { EventEmitter2 } from 'eventemitter2';
import { getUserAmsAccountsApi, setUserAmsAccountApi, postCreateAmsStreamingLocator } from '../../api/Ams';
import moment from 'moment';

const genericError = `Sorry, an unknown error occurred, try again after rebooting your device`;

export class AmsStore implements DataStore {
    public static displayName = 'amsStore';

    @observable
    public loading: boolean = true;

    @observable
    public streamingStartTime: string = moment().utc().toISOString();

    @observable
    public amsAccounts: any = [];

    @observable
    public streamingLocatorFormats: any = [];

    private _emitter = new EventEmitter2();

    public get emitter() {
        return this._emitter;
    }

    @action
    public async getUserAmsAccounts(scopeId?: string) {
        let succeeded = false;

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await getUserAmsAccountsApi(scopeId);
            if (response.succeeded) {
                runInAction('getUserAmsAccountsApi', () => {
                    this.amsAccounts = response.body;
                });
            }
            else {
                this.emitError('AMP Client error', 'An error occurred while getting the list of AMS registrations');
            }

            succeeded = response.succeeded;
        }
        catch (error) {
            this.emitError('Unknown error', genericError);
        }

        runInAction(() => {
            this.loading = false;
        });

        return succeeded;
    }

    @action
    public async setUserAmsAccount(amsAccount: any) {
        let succeeded = false;

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await setUserAmsAccountApi(amsAccount);
            if (response.succeeded) {
                runInAction('setUserAmsAccountApi', () => {
                    const account = this.amsAccounts.find(item => item.id === amsAccount.id);
                    if (account) {
                        Object.assign(account, amsAccount);
                    }
                    else {
                        this.amsAccounts.push(amsAccount);
                    }
                });
            }
            else {
                this.emitError('AMP Client error', 'An error occurred while registering the AMS account');
            }

            succeeded = response.succeeded;
        }
        catch (error) {
            this.emitError('Unknown error', genericError);
        }

        runInAction(() => {
            this.loading = false;
        });

        return succeeded;
    }

    @action
    public async createAmsStreamingLocator(assetName: string, streamingStartTime: string) {
        let succeeded = false;

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await postCreateAmsStreamingLocator(assetName);
            if (response.succeeded) {
                runInAction('postCreateAmsStreamingLocator', () => {
                    this.streamingStartTime = streamingStartTime;
                    this.streamingLocatorFormats = response.body;
                });
            }
            else {
                this.emitError('Error', response.message);
            }

            succeeded = response.succeeded;
        }
        catch (error) {
            this.emitError('Error', error);
        }

        runInAction(() => {
            this.loading = false;
        });

        return succeeded;
    }

    private emitError(title: string, message: string) {
        this.emitter.emit(StoreEvents.Error, {
            result: false,
            type: ErrorTypes.MessageError,
            error: {
                title,
                message
            }
        });
    }
}
