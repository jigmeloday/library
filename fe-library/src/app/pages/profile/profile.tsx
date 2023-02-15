import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile-component/profile.component';
import { ProfileFacade } from '../../services/facade-service/user-facades';

export function Profile() {

    const [profile, setProfile] = useState<any>();
    useEffect(() => {
        ProfileFacade.fetchProfile().then((resp: any) => {
            setProfile(resp.data);
        })
    }, []);

    return(
       <Grid container item>
           <Grid item container direction='column' py='24px' px='36px'>
               <ProfileComponent data={profile} />
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