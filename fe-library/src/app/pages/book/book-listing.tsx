import { useEffect, useState } from 'react';
import { FetchAPI } from '../../services/api-services/base-api';
import { BookFacade } from '../../services/facade-service/book-facade';

export function BookListing() {
    const [book, setBook] = useState<any>([])
    useEffect(() => {
        BookFacade.getBooks().then((res) => {
            setBook(res?.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(book)
    return(
        <>Book</>
    )
}

export default BookListing;