import { fetchCategoryAPI, fetchCategoryByIDAPI, fetchHomeCategoryAPI } from '../api-services/shared-api';

export class SharedFacade {
    static fetchCategory() {
        return fetchCategoryAPI();
    }
    static fetchCategoryByID(id: string) {
        return fetchCategoryByIDAPI(id)
    }
    static fetchHomeCategory() {
        return fetchHomeCategoryAPI();
    }
}