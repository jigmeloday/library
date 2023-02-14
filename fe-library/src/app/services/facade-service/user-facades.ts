import { fetchProfileAPI } from '../api-services/use-api';

export class ProfileFacade {
    static fetchProfie(id: string) {
        return fetchProfileAPI(id);
    }
    
}