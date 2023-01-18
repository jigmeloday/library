export interface GetBooks {
    books: [
        {
            _id: string,
            title: string,
            isbn: number,
            author: string,
            price: number,
            quantity: number,
            category: string,
            coverImage: string,
            summary: string,
        }
    ]
}