import { FetchAPI } from "./base-api";

export const userLogin = (data: any) => {
    console.log(data)
    return FetchAPI( 'user/signin', 'POST', { body: data } )
}