import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { FetchAPI } from '../../services/api-services/base-api';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCard } from './components/book-card.component';
import { Button } from '../../shared/components/button/button.component';
import { Book, GetBooks } from '../../services/model/book.model';
import { BookCover } from '../../shared/utils/shared.utils';
import { SharedModule } from '../../shared/components/module/shared.module';
import { AddBook } from './module/add-book.module';

export function BookListing() {
    const [book, setBook] = useState<GetBooks>();
    const [addBook, setAddBook] = useState<boolean>(false);
    const handleClick = () => {
        setAddBook(!addBook);
    };

    useEffect(() => {
        BookFacade.getBooks().then((res) => {
            setBook(res?.data)
        })
    }, [])
    return(
        <Grid container item >
            <Grid item container justifyContent='end' px='82px' py='24px'>
                <Button label='Add book' variant='outlined' click={handleClick}/>

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
            {
                addBook && <SharedModule title='Add Book' isOpen={addBook} handleClick={handleClick}  >
                    <AddBook />
                </SharedModule>
            }
        </Grid>
    )
}

export default BookListing;