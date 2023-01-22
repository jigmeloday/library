import { FetchAPI } from "./base-api";

export const Login = (data: FormData) => FetchAPI('/user/login', 'POST', { body: data })