import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Book } from '../../services/model/book.model';

export function BookListing() {
    const [book, setBook] = useState<Book>();
    const id = useParams()['id']
    useEffect(() => {
        BookFacade.getBook(id as string).then(
            (res) => setBook(res?.data)
        )
    }, [])
    return(
        <Grid container item >
            {
                book ? <>hello</> : <>no books</>
            }
        </Grid>
    )
}

export default BookListing;