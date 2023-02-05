import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeCategory, selectHomeItem } from '../../services/states/shared-state/shared.slice';
import { BookCard } from '../book/components/book-card.component';

export function Home() {
    const dispatch = useDispatch();
    const categoryList = useSelector(selectHomeItem)
    useEffect(() => {
        dispatch(getHomeCategory() as keyof unknown)
    }, []);

    return(
        <Grid container item>
            {
                categoryList?.books?.map((items: any) =>
                        <Grid item container key={items?._id} height='30%' p='20px'>
                            {items.name}
                            <Grid item container direction='row'>
                                {
                                   items.books.length ?
                                       items?.books?.map((book: any) =>
                                           <Box width='20%' padding='12px' >
                                               <BookCard items={book} key={`${book._id}+${book.title}`}/>
                                           </Box>): <>NO data</>
                                }
                            </Grid>
                        </Grid>
                    )
            }
        </Grid>
    )
}

export default Home;