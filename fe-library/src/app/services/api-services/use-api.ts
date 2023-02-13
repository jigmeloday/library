import { FetchAPI } from "./base-api"

export const fetchProfileAPI = (id:string) => {
    return FetchAPI(`profile/${id}`, 'GET');
}