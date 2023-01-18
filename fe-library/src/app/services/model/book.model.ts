export interface GetBooks {
    books: Book[]
}

export interface Book{
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