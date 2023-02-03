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
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../services/states/credential-state/credential.slice';
import { setMenu } from '../../services/states/shared-state/shared.action';
import { SharedMenu } from '../../shared/components/menu/shared.menu';
import { HeaderMenu } from './header-menu/header-menu.component';

export function HeaderComponent() {
    const url = useLocation().pathname;
    const nav = useNavigate();
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
       setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

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
                                    onClick={openMenu}
                                >
                                    <img src={ProfileImage} width='100%' height='100%'   className='object-fit--cover border-radius-full'
                                    />
                                </ProfileContainer> :
                                <Button click={() => nav('/authentication/login')} label='Login' variant='contained' color='primary'  />
                        }

                    </Grid>
                </Grid>
            </Grid>
            {
                open &&
                <SharedMenu anchorEl={anchorEl} open={true} handleClose={handleClose} >
                    <HeaderMenu />
                </SharedMenu>
            }
        </HeaderContainer>
    )
}

export default memo(HeaderComponent);