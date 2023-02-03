export interface GetBooks {
    book: Book[]
}

export interface Book{
    _id?: string,
    title: string,
    isbn?: string,
    author: string,
    price: string,
    quantity: string,
    category?:any,
    coverImage?: string,
    summary: string,
    creatorId?: string
}