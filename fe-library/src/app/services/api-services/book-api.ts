import { GetBooks } from '../model/book.model';
import { FetchAPI } from './base-api';

export const getBooksAPI = () => FetchAPI<GetBooks>('books', 'GET');