import { APIResponse, Methods } from '../../shared/models/shared.model';

// const baseUrl = environment.NX_SERVER_URL ;

export const FetchAPI = async <T>( url: string, method: Methods, init?: RequestInit ): Promise<APIResponse<T>> => {
    return window.fetch( `${''}/${url}`, {
        method,
        ...init,
        credentials: 'include',
        headers: {
            'accept-language': 'en',
        }
    } ).then( async response => {
        if ( response.ok || response.status < 400 ) {
            const json = await response.json();
            return { data: json };
        }
        // convert non-2xx HTTP responses into errors:
        const json = await response.json();
        return Promise.resolve( { error: json } );
    } ).catch( response => {
        return Promise.resolve( { error: { errors: [response?.toString()] } } );
    } );
};
