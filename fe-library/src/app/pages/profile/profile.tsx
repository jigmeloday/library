import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile-component/profile.component';
import { ProfileFacade } from '../../services/facade-service/user-facades';
import { Button } from '../../shared/components/button/button.component';
import { SharedModule } from '../../shared/components/module/shared.module';

export function Profile() {

    const [profile, setProfile] = useState<any>();
    const [edit, setEdit] = useState<boolean>(false);
    useEffect(() => {
        ProfileFacade.fetchProfile().then((resp: any) => {
            setProfile(resp.data);
        })
    }, []);
    const onEdit = () => {
        setEdit(!edit);
    }
    return(
       <Grid container item>
           <Grid item container justifyContent='end' xs={11} py='32px'>
               <Button label='Edit' variant='contained' click={onEdit} />
           </Grid>
           <Grid item container direction='column' py='24px' px='36px'>
               <ProfileComponent data={profile} />
               {/*<Grid item container direction='row' px='36px'>*/}
               {/*    <Grid>*/}
               {/*        hello*/}
               {/*    </Grid><Grid>*/}
               {/*        hello*/}
               {/*    </Grid>*/}
               {/*</Grid>*/}
           </Grid>
           {
               edit && <SharedModule title='Edit Profile' isOpen={edit}>

               </SharedModule>
           }
       </Grid>
    )
}

export default Profile;