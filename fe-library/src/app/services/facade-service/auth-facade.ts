import { serialize } from "object-to-formdata";
import { userCreation, userLogin } from "../api-services/auth-api";

export class AuthFacade {
    static login(data: { email: string, password: string }): Promise<any> {
        return userLogin(serialize(data))
    }
    static signUp(data: { email: string, password: string }): Promise<any> {
        return userCreation(serialize(data))
    }
}