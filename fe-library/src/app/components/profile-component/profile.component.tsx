import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { theme } from '../../../assest/theme';
import { PROFILE_CONSTANT } from '../../pages/profile/profile.constant';
import { Typography } from '../../shared/components/typography/typography.component';
import { ProfileImage } from '../../shared/utils/shared.utils';
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
                   <img src={ProfileImage} width='100%' height='100%' className='object-fit--cover'/>
               </ProfileContainer>
               <Grid item container justifyContent='center' py='32px'>
                   <Typography label={props?.data?.username?.toUpperCase() || 'username'} variant='body1' fontSize={18} fontWeight='500' />
               </Grid>
               <Grid item container justifyContent='center' xs={8}>
                   <Grid item container>
                       {
                           PROFILE_CONSTANT.map((items: any) =>
                            <Grid item container direction='row' key={`${items.id}+${items.label}`} py='12px'>
                                <Box pr='4px'>
                                    <Typography variant='body1' label={`${items.label}: `} fontWeight='bold' />
                                </Box>
                                {
                                    items.value === 'name'? <Typography variant='body1' label={` ${props?.data?.['firstName']} ${props?.data?.['lastName']}`} /> :
                                        <Typography variant='body1' label={` ${props?.data?.[items.value]}`} />

                                }
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