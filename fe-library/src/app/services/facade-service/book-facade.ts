import { APIResponse } from '../../shared/models/shared.model';
import { serialize } from 'object-to-formdata';
import { createBookAPI, getBookAPI, getBooksAPI } from '../api-services/book-api';
import { Book, GetBooks } from '../model/book.model';

export class BookFacade {
    static getBooks(): Promise<APIResponse<GetBooks>> {
        return getBooksAPI();
    }
    static getBook(id: string): Promise<APIResponse<Book>> {
        return  getBookAPI(id);
    }
    static addBook(book: Book): Promise<APIResponse<Book>> {
        return createBookAPI(serialize(book))
    }
}