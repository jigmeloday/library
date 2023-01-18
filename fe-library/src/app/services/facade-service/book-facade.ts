import { APIResponse } from '../../shared/models/shared.model';
import { getBooksAPI } from '../api-services/book-api';
import { GetBooks } from '../model/book.model';

export class BookFacade {
    static getBooks(): Promise<APIResponse<GetBooks>> {
        return getBooksAPI();
    }
}