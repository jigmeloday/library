import { Box, Grid } from '@mui/material';
import { useEffect, useState, lazy } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Book } from '../../services/model/book.model';
import { selectCurrentUser } from '../../services/states/credential-state/credential.slice';
import { Button } from '../../shared/components/button/button.component';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCover } from '../../shared/utils/shared.utils';
import { BookCard } from './book.style';
import { AddBook } from './module/add-book.module';
import { DeleteBook } from './module/delete-action';

const NoDataComponent = lazy( () => import('../../components/no-data/no-data.component') );

export function BookListing() {
    const [ book, setBook ] = useState<Book>();
    const [ edit, setEdit ] = useState<boolean>( false );
    const [ deleteBook, setDeleteBook ] = useState<boolean>( false );
    const user = useSelector(selectCurrentUser)
    const editBook = () => {
        setEdit( !edit );
    }
    const bookDelete = () => {
        setDeleteBook( !deleteBook );
    }
    const id = useParams()[ 'id' ]
    useEffect( () => {
        BookFacade.getBook( id as string ).then(
            ( res ) => setBook( res?.data )
        )
    }, [] );
    return (
        <Grid container item p='24px'>
            <Grid item container direction='column'>
                <Grid item container direction='row'>
                    <Grid item xs={ 4 } py='12px' pr='12px'>
                        <BookCard>
                            <img src={ book?.coverImage ? `http://localhost:3000/${ book?.coverImage }` : BookCover }
                                 width='100%' height='100%' className='object-fit--cover'/>
                        </BookCard>
                    </Grid>
                    <Grid item container xs={ 8 } direction='column'>
                        <Typography label={ book?.title } variant='body1' fontSize={ 20 } fontWeight='bold'/>
                        <Typography label={ book?.author } variant='body1' fontSize={ 20 }/>
                        <Typography label={ `Genre: ${ book?.category }` } variant='subtitle1' fontSize={ 14 }/>
                        <Typography label={ `Price: $${ book?.price }` } variant='subtitle1' fontSize={ 14 }/>
                        <Typography label='Posted by: Jigme' variant='subtitle1' fontSize={ 14 }/>
                        <Typography label='Date: 12-12-12' variant='subtitle1' fontSize={ 14 }/>
                        <Box py='14px' width='40%'>
                            <Typography label='Summary: ' variant='subtitle1' fontSize={ 16 }
                                        fontWeight='bold'/> { book?.summary }
                        </Box>
                        <Grid item container>
                            { user.uid === book?.creatorId ?
                                <>
                                    <Button label='Delete' click={ bookDelete }/>
                                    <Box px='12px'>
                                        <Button label='Edit' click={ editBook }/>
                                    </Box>
                                </> : <Button label='READ'/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {
                deleteBook && <DeleteBook book={ book?.title as string } handleClick={ bookDelete }/>
            }
            {
                edit && <AddBook handleClick={ editBook } book={ book }/>
            }
        </Grid>
    )
}

export default BookListing;