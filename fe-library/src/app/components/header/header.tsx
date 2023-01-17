import { memo, useEffect, useState } from 'react';
import { HeaderContainer } from './header.style';
import { Box, Grid } from '@mui/material';
import { NAVIGATION } from './constant/header.constant';
import { Typography } from '../../shared/components/typography/typography.component';
import { theme } from '../../../assest/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/button/button.component';
import { ProfileContainer } from '../profile-image/profile-image.style';
import { ProfileImage } from '../../shared/utils/shared.utils';
import { useSelector } from 'react-redux';
import { selectToken } from '../../services/states/credential-state/credential.slice';

export function HeaderComponent() {
    const url = useLocation().pathname;
    const nav = useNavigate();
    const token = useSelector(selectToken);

    return(
        <HeaderContainer>
            <Grid item container direction='row' alignItems='center' >
                <Grid item container xs={5}>
                    Logo
                </Grid>
                <Grid item container xs={7} >
                   <Grid item container direction='row' xs={9} alignItems='center' justifyContent='space-around'>

                             {
                                 NAVIGATION.map(({ id, path, label }) =>
                                     <Grid item key={`${id}+${path}`} className='cursor--pointer'>
                                     <Typography label={label}
                                                 color={ url === path ?
                                                     theme('light').palette.primary.main :
                                                     theme('light').palette.black.main}
                                                 click={() => nav(path)} />
                                     </Grid>
                                 )
                             }
                   </Grid>
                    <Grid item container justifyContent='end' xs={2}>
                        {
                            token.length ?
                                <ProfileContainer
                                    borderRadius={50}
                                    border={`4px solid
                             ${theme('light').palette.grey.A100}`}
                                    width='60px' height='60px'
                                    className='cursor--pointer'
                                >
                                    <img src={ProfileImage} width='100%' height='100%'   className='object-fit--cover border-radius-full'
                                    />
                                </ProfileContainer> :
                                <Button click={() => nav('/authentication/login')} label='Login' variant='contained' color='primary'  />
                        }

                    </Grid>
                </Grid>
            </Grid>
        </HeaderContainer>
    )
}

export default memo(HeaderComponent);