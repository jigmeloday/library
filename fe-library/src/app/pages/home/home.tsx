import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeCategory, selectHomeItem } from '../../services/states/shared-state/shared.slice';

export function Home() {
    const dispatch = useDispatch();
    const categoryList = useSelector(selectHomeItem)
    useEffect(() => {
        dispatch(getHomeCategory() as keyof unknown)
    }, []);

    return(
        <Grid container item>
            {
                categoryList?.books?.map(() => <>
                    hello
                </>)
            }
        </Grid>
    )
}

export default Home;