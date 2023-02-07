import { useState, useEffect } from 'react';
import { BookFacade } from '../../services/facade-service/book-facade';

export function AuthorListing() {
    const [reader, setReader] = useState<any>();
    useEffect(() => {
        BookFacade.getReader().then((res) => {
            setReader(res?.data);
        })
    }, []);
    console.log(reader)
    return(
        <>author</>
    )
}

export default AuthorListing;