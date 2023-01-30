export interface GetBooks {
    books: Book[]
}

export interface Book{
    _id?: string,
    title: string,
    isbn?: string,
    author: string,
    price: string,
    quantity: string,
    category: string,
    coverImage?: string,
    summary: string,
}