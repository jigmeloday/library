import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile-component/profile.component';

export function Profile() {
    return(
       <Grid container item>
           <Grid item container direction='column' py='24px' px='36px'>
               <ProfileComponent />
               <Grid item container direction='row' px='36px'>
                   <Grid>
                       hello
                   </Grid><Grid>
                       hello
                   </Grid>
               </Grid>
           </Grid>
       </Grid>
    )
}

export default Profile;