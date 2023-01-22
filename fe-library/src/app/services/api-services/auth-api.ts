import { FetchAPI } from "./base-api";

export const userLogin = (data: FormData) => FetchAPI('/user/login', 'POST', { body: data })