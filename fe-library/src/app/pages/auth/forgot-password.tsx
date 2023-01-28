import { Grid } from '@mui/material'
import { Typography } from '../../shared/components/typography/typography.component'
import { AuthComponent } from './components/auth.component'

export function ForgotPassword() {
    return(
        <AuthComponent>
            <Grid item container direction='column'>
                <Grid item container py='20px' direction='column'>
                    <Grid item container direction='column' alignItems='center' xs={12}>
                        <Typography label='Welcome Back' variant='h5' />
                        <Typography label='Welcome back! Please enter your details.' variant='subtitle2' color='gray' />
                    </Grid>
                    <Grid item container py='22px'>
                        Coming Soon...
                    </Grid>
                </Grid>
            </Grid>
        </AuthComponent>
    )
}
export  default (ForgotPassword)