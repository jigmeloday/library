import { serialize } from "object-to-formdata";
import { userLogin } from "../api-services/auth-api";

export class AuthFacade {
    static login(data: { email: string, password: string }): Promise<any> {
        return userLogin(serialize(data))
    }
}