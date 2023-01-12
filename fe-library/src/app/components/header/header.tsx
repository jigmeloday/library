import { memo } from 'react';
import { HeaderContainer } from './header.style';
import { Box, Grid, Typography } from '@mui/material';
import { NAVIGATION } from './constant/header.constant';

export function HeaderComponent() {
    return(
        <HeaderContainer>
            <Grid item container direction='row'>
                <Grid item container xs={5}>
                    Logo
                </Grid>
                <Grid item container xs={6} >
                   <Grid item container xs={8} justifyContent='end'>
                       <Box display='flex' flexDirection='row' justifyContent='space-around' >
                           {
                               NAVIGATION.map(({ id, path, label }) =>
                                   <Typography key={id}>{label}</Typography>
                               )
                           }
                       </Box>

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