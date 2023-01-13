import { memo } from 'react';
import { HeaderContainer } from './header.style';
import { Box, Grid } from '@mui/material';
import { NAVIGATION } from './constant/header.constant';
import { Typography } from '../../shared/components/typography/typography.component';

export function HeaderComponent() {
    return(
        <HeaderContainer>
            <Grid item container direction='row'>
                <Grid item container xs={5}>
                    Logo
                </Grid>
                <Grid item container xs={6} >
                   <Grid item container direction='row' xs={8} justifyContent='space-around'>

                             {
                                 NAVIGATION.map(({ id, path, label }) =>
                                     <Grid item key={`${id}+${path}`} className='cursor--pointer'>
                                     <Typography label={label} click={() => console.log(path)} />
                                     </Grid>

                                 )
                             }

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