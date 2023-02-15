import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile-component/profile.component';
import { ProfileFacade } from '../../services/facade-service/user-facades';

export function AuthorDetails() {
    const [user, setUser] = useState<any>();
    const id = useParams()['id'];
    useEffect(() => {
        ProfileFacade.fetchProfile(id as string).then((resp) => {
            setUser(resp?.data)
        })
    }, [])
    return(
        <Grid container item>
            <Grid item container direction='column' py='24px' px='36px'>
                <ProfileComponent />
            </Grid>
        </Grid>
    )
}

export default AuthorDetails;