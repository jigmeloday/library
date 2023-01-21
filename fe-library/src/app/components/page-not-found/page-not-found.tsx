import { Grid } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/button/button.component';

export function PageNotFound() {
    const nav = useNavigate()
    return(
        <Grid container item justifyContent='center'>
            <Grid item container xs={5} justifyContent='center'>
                <img src='../../../../images/404-error-with-a-cute-animal-animate.svg' className='object-fit--cover' />
                <Button label='Home' click={() => nav('/') } variant='contained' />
            </Grid>
        </Grid>
    );
}

export default memo(PageNotFound)