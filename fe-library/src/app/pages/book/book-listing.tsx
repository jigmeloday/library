import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import { useEffect, lazy, useState } from 'react';
import { FetchAPI } from '../../services/api-services/base-api';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCard } from './components/book-card.component';
import { Button } from '../../shared/components/button/button.component';
import { Book, GetBooks } from '../../services/model/book.model';
import { BookCover } from '../../shared/utils/shared.utils';
import { SharedModule } from '../../shared/components/module/shared.module';
import { AddBook } from './module/add-book.module';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, selectBooks } from '../../services/states/book-state/book.slice';
import { selectToken } from '../../services/states/credential-state/credential.slice';

const NoData =  lazy(() => import('../../components/no-data/no-data.component'));

export function BookListing() {
    const [addBook, setAddBook] = useState<boolean>(false);
    const dispatch = useDispatch();
    const book = useSelector( selectBooks );
    const isAuthenticated = useSelector(selectToken);
    const handleClick = () => {
        setAddBook(!addBook);
    };
    useEffect(() => {
        dispatch(getBook() as keyof unknown)
    }, []);


    return(
        <Grid container item >
            <Grid item container justifyContent='end' px='82px' py='24px'>
                {
                    isAuthenticated && <Button label='Add book' variant='outlined' click={handleClick}/>
                }
            </Grid>
            <Grid item container direction='row' py='2px' px='14px' justifyContent='start'>
                {
                    book?.book.length? book?.book?.map((item: Book ) =>
                        <Grid item py='10px' px='8px' width='24%' key={item._id}>
                            <BookCard items={item} />
                        </Grid>
                    ): <NoData />
                }
            </Grid>
            {
                addBook && <AddBook handleClick={handleClick} />
            }
        </Grid>
    )
}

export default BookListing;