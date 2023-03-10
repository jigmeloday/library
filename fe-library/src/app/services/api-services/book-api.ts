import { Book, GetBooks } from '../model/book.model';
import { FetchAPI } from './base-api';

export const getBooksAPI = () => FetchAPI<GetBooks>('books', 'GET');
export const getBookAPI = (id: string) => FetchAPI<Book>(`books/${id}`, 'GET');
export const createBookAPI = (data: FormData) => FetchAPI<Book>('books', 'POST', { body: data });
export const editBookAPI = (data: FormData) => FetchAPI<Book>('books', 'PATCH', { body: data });
export const deleteBookAPI = (id: string) => FetchAPI<Book>(`books/${id}`, 'DELETE');
export const readBookAPI = (id: FormData) => FetchAPI('reader', 'POST', { body: id });
export const getReaderAPI = () => FetchAPI('reader', 'GET');