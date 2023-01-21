import { Card, Grid } from '@mui/material';
import { memo } from 'react';

export function AuthComponent(props: {children: any}) {
    return (
        <Grid container item justifyContent='center' alignItems='center' height='100vh'>
           <Card>
               <Grid item container px='22px' py='32px'>
                   { props.children }
               </Grid>
           </Card>
        </Grid>
    )
}

export default memo(AuthComponent)