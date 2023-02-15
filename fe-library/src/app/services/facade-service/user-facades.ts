import { fetchProfileAPI } from '../api-services/use-api';

export class ProfileFacade {
    static fetchProfile(id?: string) {
        return fetchProfileAPI(id);
    }
    
}