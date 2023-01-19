import { Book, GetBooks } from '../model/book.model';
import { FetchAPI } from './base-api';

export const getBooksAPI = () => FetchAPI<GetBooks>('books', 'GET');
export const getBookAPI = (id: string) => FetchAPI<Book>(`books/${id}`, 'GET');