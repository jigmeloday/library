import { FetchAPI } from "./base-api"

export const fetchProfileAPI = (id?:string) => {
    return FetchAPI(id? `profile/${id}`: 'profile', 'GET');
}