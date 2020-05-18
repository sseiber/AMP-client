import { action, observable, runInAction } from 'mobx';
import { DataStore, StoreEvents, ErrorTypes } from '.';
import { EventEmitter2 } from 'eventemitter2';
import { getUserAmsAccountsApi, setUserAmsAccountApi, postCreateAmsStreamingLocatorApi } from '../../api/Ams';

const genericError = `Sorry, an unknown error occurred, try again after rebooting your device`;

export class AmsStore implements DataStore {
    public static displayName = 'amsStore';

    @observable
    public loading: boolean = true;

    @observable
    public amsAccounts: any = [];

    @observable
    public streamingLocatorFormats: any = [];

    private _emitter = new EventEmitter2();

    public get emitter() {
        return this._emitter;
    }

    @action
    public async getUserAmsAccounts(accountName?: string) {
        let succeeded = false;

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await getUserAmsAccountsApi(accountName);
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
                    this.amsAccounts = response.body;

                    // const updatedAccount = response.body;
                    // const account = this.amsAccounts.find(item => item.id === updatedAccount.id);
                    // if (account) {
                    //     Object.assign(account, updatedAccount);
                    // }
                    // else {
                    //     this.amsAccounts.push(updatedAccount);
                    // }
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
    public async createAmsStreamingLocator(accountName: string, assetName: string) {
        let succeeded = false;

        if (!assetName || !accountName) {
            this.emitError('Error', `Missing assetName (an) or accountName (ac) param in url string`);
            return;
        }

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await postCreateAmsStreamingLocatorApi(accountName, assetName);
            if (response.succeeded) {
                runInAction('postCreateAmsStreamingLocator', () => {
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
