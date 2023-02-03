import { fetchCategoryAPI, fetchCategoryByIDAPI } from "../api-services/shared-api";

export class SharedFacade {
    static fetchCategory() {
        return fetchCategoryAPI();
    }
    static fetchCategoryByID(id: string) {
        return fetchCategoryByIDAPI(id)
    }
}