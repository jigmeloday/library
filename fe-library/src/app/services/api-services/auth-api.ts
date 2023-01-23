import { FetchAPI } from "./base-api";

export const userLogin = (data: any) => {
    return FetchAPI( 'user/signin', 'POST', { body: data } )
}