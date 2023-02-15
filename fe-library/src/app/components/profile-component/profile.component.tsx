import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { theme } from '../../../assest/theme';
import { PROFILE_CONSTANT } from '../../pages/profile/profile.constant';
import { Typography } from '../../shared/components/typography/typography.component';
import { ProfileContainer } from '../profile-image/profile-image.style';

export function ProfileComponent(props: any) {

    return(
       <Grid container item px='38px' py='32px' >
           <Grid item container justifyContent='center'>
               <ProfileContainer
                   item
                   xs={2}
                   borderRadius={50}
                   border={`4px solid
                    ${theme('light').palette.grey.A100}`}
                   width='180px'
                   height='190px'>
                   <img src='../../../../images/reading-glasses-animate.svg' width='100%' height='100%' className='object-fit--cover'/>
               </ProfileContainer>
               <Grid item container justifyContent='center' py='32px'>
                   kk
               </Grid>
               <Grid item container justifyContent='center' xs={8}>
                   <Grid item container>
                       {
                           PROFILE_CONSTANT.map((items: any) =>
                            <Grid item container direction='row' key={`${items.id}+${items.label}`}>
                                <Typography variant='body1' label={`${items.label}: `} />
                                <Typography variant='body1' label={` ${props?.data?.[items.value]}`} />
                            </Grid>
                           )
                       }
                   </Grid>
               </Grid>
           </Grid>
       </Grid>
    )
}

export default memo(ProfileComponent)