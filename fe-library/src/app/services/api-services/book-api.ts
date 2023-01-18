import { FetchAPI } from './base-api';

export const getBooksAPI = () => FetchAPI('/books', 'GET');