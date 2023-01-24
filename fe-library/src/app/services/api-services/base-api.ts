import storage from 'redux-persist/es/storage';
import { APIResponse, Methods } from '../../shared/models/shared.model';

// const baseUrl = environment.NX_SERVER_URL ;

export const FetchAPI = async <T>( url: string, method: Methods, init?: RequestInit ): Promise<APIResponse<T>> => {
    const authorization = `Bearer ${localStorage.getItem('token')}` || '';
    return window.fetch( `${'http://localhost:3000'}/${url}`, {
        method,
        ...init,
        // credentials: 'include',
        headers: {
            authorization,
            'accept-language': 'en',
        }
    } ).then( async response => {
        if ( response.ok || response.status < 400 ) {
            const json = await response.json();
            return { data: json };
        }
        if ( response.status === 401 ) {
           authorization.length && storage.removeItem('persist:root')
        }
        // convert non-2xx HTTP responses into errors:
        const json = await response.json();
        return Promise.resolve( { error: json } );
    } ).catch( response => {
        return Promise.resolve( { error: { errors: [response?.toString()] } } );
    } );
};
