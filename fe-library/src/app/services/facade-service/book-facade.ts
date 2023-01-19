import { APIResponse } from '../../shared/models/shared.model';
import { getBookAPI, getBooksAPI } from '../api-services/book-api';
import { Book, GetBooks } from '../model/book.model';

export class BookFacade {
    static getBooks(): Promise<APIResponse<GetBooks>> {
        return getBooksAPI();
    }
    static getBook(id: string): Promise<APIResponse<Book>> {
        return  getBookAPI(id);
    }
}