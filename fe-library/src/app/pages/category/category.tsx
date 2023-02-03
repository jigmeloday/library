import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, selectCategory } from '../../services/states/shared-state/shared.slice';

export function Category() {
    const categoryList = useSelector(selectCategory);
    const dispatch = useDispatch();
    useEffect(() => {
        !categoryList && dispatch(getCategory() as keyof unknown);
    }, []);
    console.log(categoryList)
    return(
       <Grid container item>
           {
               categoryList?.category?.map(() =>
                   <>hllo</>
               )
           }
       </Grid>
    )
}

export default Category;