import { serialize } from "object-to-formdata";
import { updateUserAPI, userCreation, userLogin } from "../api-services/auth-api";

export class AuthFacade {
    static login(data: { email: string, password: string }): Promise<any> {
        return userLogin(serialize(data))
    }
    static signUp(data: { email: string, password: string, username: string }): Promise<any> {
        return userCreation(serialize(data))
    }
    static updateUser( data: any, id: string ) {
        return updateUserAPI(serialize(data), id);
    }
}