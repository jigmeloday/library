import { memo } from 'react';
import { HeaderContainer } from './header.style';
import { Grid } from '@mui/material';

export function HeaderComponent() {
    return(
        <HeaderContainer>
            <Grid item container direction='row'>
                <Grid item container xs={5}>
                    hello
                </Grid>
                <Grid item container xs={6} >
                   <Grid item container xs={8} justifyContent='end'>
                       hello
                   </Grid>
                    <Grid item container justifyContent='end' xs={4}>
                        hello
                    </Grid>
                </Grid>
            </Grid>
        </HeaderContainer>
    )
}

export default memo(HeaderComponent);