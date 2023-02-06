import { Box, Grid } from '@mui/material';
import { useState, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHomeCategory, selectHomeItem } from '../../services/states/shared-state/shared.slice';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCard } from '../book/components/book-card.component';

const NoData = lazy( () => import('../../components/no-data/no-data.component') );

export function Home() {
    const dispatch = useDispatch();
    const categoryList = useSelector( selectHomeItem );
    const nav = useNavigate();
    useEffect( () => {
        dispatch( getHomeCategory() as keyof unknown )
    }, [] );

    return (
        <Grid container item>
            {
                categoryList?.books?.map( ( items: any ) =>
                    <Grid item container key={ items?._id } p='20px'>
                        <Typography label={ items?.name } variant='body1' fontWeight='bold'
                                    click={ () => nav( `/categories/${ items._id }` ) }
                                    className='cursor--pointer'/>
                        <Grid item container direction='row'>
                            {
                                items.books.length ?
                                    items?.books?.map( ( book: any ) =>
                                        <Box width='20%' padding='12px'>
                                            <BookCard items={ book } key={ `${ book._id }+${ book.title }` }/>
                                        </Box> ) :
                                    <Grid item container>
                                        <NoData/>
                                    </Grid>
                            }
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Home;