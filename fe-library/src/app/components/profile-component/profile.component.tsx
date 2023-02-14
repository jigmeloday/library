import { Grid } from '@mui/material';
import { memo } from 'react';

export function ProfileComponent(props: any) {
    console.log(props)
    return(
       <Grid container item px='38px'>
jj
       </Grid>
    )
}

export default memo(ProfileComponent)