import { FetchAPI } from "./base-api"

export const fetchCategoryAPI = () => {
    return FetchAPI('category', 'GET' );
}

export const fetchCategoryByIDAPI = (id: string) => {
    return FetchAPI(`category/${id}`, 'GET')
}