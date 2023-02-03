import { fetchCategoryAPI } from "../api-services/shared-api";

export class SharedFacade {
    static fetchCategory() {
        return fetchCategoryAPI();
    }
}