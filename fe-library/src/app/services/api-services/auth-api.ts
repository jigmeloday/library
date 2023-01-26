import { FetchAPI } from "./base-api";

export const userLogin = (data: FormData) => {
    return FetchAPI( 'user/signin', 'POST', { body: data } )
};

export const userCreation = (data: FormData) => {
    return FetchAPI('user/signup', 'POST', { body: data })
}