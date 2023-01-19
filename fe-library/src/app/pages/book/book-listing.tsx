import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { FetchAPI } from '../../services/api-services/base-api';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCard } from './components/book-card.component';
import { Button } from '../../shared/components/button/button.component';
import { Book, GetBooks } from '../../services/model/book.model';
import { BookCover } from '../../shared/utils/shared.utils';

export function BookListing() {
    const [book, setBook] = useState<GetBooks>()
    useEffect(() => {
        BookFacade.getBooks().then((res) => {
            setBook(res?.data)
        })
    }, [])
    return(
        <Grid container item >
            <Grid item container justifyContent='end' px='82px' py='24px'>
                <Button label='Add book' variant='outlined'/>

            </Grid>
            <Grid item container direction='row' py='2px' px='14px' justifyContent='start'>
                {
                    book?.books?.map((item: Book ) =>
                        <Grid item py='10px' px='8px' width='24%' key={item._id}>
                            <BookCard items={item} />
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default BookListing;