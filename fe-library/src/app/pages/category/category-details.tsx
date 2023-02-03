import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SharedFacade } from '../../services/facade-service/shared-facade';
import { Book } from '../../services/model/book.model';
import BookListing from '../book/book-listing';
import { BookCard } from '../book/components/book-card.component';

export function CategoryDetails() {
    const [books, setBooks] = useState<any>();
    const dispatch = useDispatch();
    const id = useParams()['id'];
    useEffect(() => {
        SharedFacade.fetchCategoryByID(id as string).then((resp) => {
            setBooks(resp?.data)
        }).catch((error) => console.log(error))
    }, []);
    return(
        <Grid item container direction='row' py='2px' px='14px' justifyContent='start'>
            {
                books?.books?.map((item: Book ) =>
                    <Grid item py='10px' px='8px' width='24%' key={item._id}>
                        <BookCard items={item} />
                    </Grid>
                )
            }
        </Grid>
    )
}

export default CategoryDetails;