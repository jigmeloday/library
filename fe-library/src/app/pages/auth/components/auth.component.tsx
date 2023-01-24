import { Card, Grid } from '@mui/material';
import { memo } from 'react';
import { AuthCard } from './auth.style';

export function AuthComponent(props: {children: any}) {
    return (
        <Grid container item height='100vh'>
            <Grid item container direction='row' justifyContent='center' alignItems='center' p='22px'>
               <AuthCard item container direction='row'>
                   <Grid item  container xs={6}justifyContent='center' alignItems='center'>
                       Authentication
                   </Grid>
                   <Grid item container xs={6} justifyContent='center' alignItems='center'>
                       {props.children}
                   </Grid>
               </AuthCard>
            </Grid>
        </Grid>
    )
}

export default memo(AuthComponent)