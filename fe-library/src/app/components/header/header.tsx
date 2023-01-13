import { memo, useEffect, useState } from 'react';
import { HeaderContainer } from './header.style';
import { Box, Grid } from '@mui/material';
import { NAVIGATION } from './constant/header.constant';
import { Typography } from '../../shared/components/typography/typography.component';
import { theme } from '../../../assest/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/button/button.component';

export function HeaderComponent() {
    const [active, setActive] = useState<string>('/');
    const url = useLocation().pathname;
    const nav = useNavigate();
    useEffect(() => {
        setActive(url)
    }, [url])
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
                                     <Typography label={label}
                                                 color={ active === path ?
                                                     theme('light').palette.primary.main :
                                                     theme('light').palette.black.main}
                                                 click={() => nav(path)} />
                                     </Grid>

                                 )
                             }

                   </Grid>
                    <Grid item container justifyContent='end' xs={4}>
                       <Button label='Login' variant='contained' color='primary'  />
                    </Grid>
                </Grid>
            </Grid>
        </HeaderContainer>
    )
}

export default memo(HeaderComponent);