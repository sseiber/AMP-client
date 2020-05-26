import { FetchResponse, fetchHelper } from './FetchHelper';

export function getUserAmsAccountsApi(accountName?: string): Promise<FetchResponse> {
    const path = accountName ? `/api/v1/ams/account/${accountName}` : `/api/v1/ams/account`;

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

export function deleteUserAmsAccountApi(amsAccountId: string): Promise<FetchResponse> {
    return fetchHelper(`/api/v1/ams/account/${amsAccountId}`,
        {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}

export function postCreateAmsStreamingLocatorApi(accountName: string, assetName: string): Promise<FetchResponse> {
    return fetchHelper(`/api/v1/ams/account/${accountName}/streaminglocator`,
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
