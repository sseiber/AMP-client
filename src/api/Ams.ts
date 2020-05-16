import { FetchResponse, fetchHelper } from './FetchHelper';

export function getUserAmsAccountsApi(scopeId?: string): Promise<FetchResponse> {
    const path = scopeId ? `/api/v1/ams/account/scope/${scopeId}` : `/api/v1/ams/account/scope`;

    return fetchHelper(path,
        {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}

export function setUserAmsAccountApi(amsAccount: any): Promise<FetchResponse> {
    return fetchHelper(`/api/v1/ams/account`,
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                amsAccount
            })
        });
}

export function postCreateAmsStreamingLocator(assetName: string): Promise<FetchResponse> {
    return fetchHelper(`/api/v1/ams/streaminglocator`,
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                assetName
            })
        });
}
