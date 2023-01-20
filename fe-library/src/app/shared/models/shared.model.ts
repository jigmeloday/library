export interface RouteModel {
    id: string,
    component: JSX.Element,
    route: string
}

export type MatColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type MatVariants = 'text' | 'outlined' | 'contained';
export type MatInputVariants = 'filled' | 'outlined' | 'standard';

export type Methods =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK';

export interface APIResponse<T> {
    data?: T;
    error?: { errors: string[] };
}

export interface SharedModuleProps{
    isOpen?: boolean;
    handleClick?: () => void
    title?: string
    children?: any
}