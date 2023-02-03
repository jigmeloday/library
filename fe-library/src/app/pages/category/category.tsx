import { Card, CardContent, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategory, selectCategory } from '../../services/states/shared-state/shared.slice';
import { Button } from '../../shared/components/button/button.component';
import { Typography } from '../../shared/components/typography/typography.component';
import { BG_COLOR, COLOR } from './constant/category.constant';

export function Category() {
    const categoryList = useSelector(selectCategory);
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        !categoryList && dispatch(getCategory() as keyof unknown);
    }, []);
    return(
       <Grid container item >
           <Grid container item direction='row' py='2px' px='14px' justifyContent='start' >
               {
                   categoryList?.category?.map(( items:{ _id: string, name: string } ) =>
                       <Grid item py='10px' px='8px' width='24%' key={items._id}>
                           <Card sx={{ background: BG_COLOR[ (items?.name.replace(' ', '')).toLowerCase() as keyof unknown ] }} >
                               <CardContent>
                                   <Grid item container direction='column' alignItems='center' py='24px'>
                                       <Typography label={(items?.name).toUpperCase()} color={
                                           COLOR[ (items?.name.replace(' ', '')).toLowerCase() as keyof unknown ]
                                       } variant='body1' fontWeight='bold' />
                                   </Grid>
                               </CardContent>
                               <Grid item container justifyContent='center' pb='20px'>
                                   <Button click={() => nav(`/categories/${items._id}`)} variant='outlined' label='View More' />
                               </Grid>
                           </Card>
                       </Grid>
                   )
               }
           </Grid>
       </Grid>
    )
}

export default Category;