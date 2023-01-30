import { Grid } from '@mui/material';
import { useEffect, useState, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Book } from '../../services/model/book.model';
import { Typography } from '../../shared/components/typography/typography.component';

const NoDataComponent = lazy(() => import('../../components/no-data/no-data.component'));

export function BookListing() {
    const [book, setBook] = useState<Book>();
    const id = useParams()['id']
    useEffect(() => {
        BookFacade.getBook(id as string).then(
            (res) => setBook(res?.data)
        )
    }, []);
    return(
        <Grid container item p='24px'>
           <Grid item container direction='column'>
               <Grid item container py='22px' direction='column'>
                  <Typography label={book?.title} variant='body1' fontSize={20} fontWeight='bold' />
                   <Typography label='Posted by: Jigme' variant='subtitle1' fontSize={14} />
                   <Typography label='Date: 12-12-12' variant='subtitle1' fontSize={14} />
               </Grid>
               <Grid item container direction='row'>
                   <Grid item container xs={4}>
                       1
                   </Grid>
                   <Grid item container xs={8}>
                       2
                   </Grid>
               </Grid>
           </Grid>
        </Grid>
    )
}

export default BookListing;