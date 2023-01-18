import { getBooksAPI } from '../api-services/book-api';

export class BookFacade {
    static getBooks() {
        return getBooksAPI();
    }
}