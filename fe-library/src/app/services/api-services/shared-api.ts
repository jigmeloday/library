import { FetchAPI } from "./base-api"

export const fetchCategoryAPI = () => {
    return FetchAPI('category', 'GET' );
}