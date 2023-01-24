import { Grid } from '@mui/material';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../services/states/credential-state/credential.slice';
import { Button } from '../../shared/components/button/button.component';
import { Input } from '../../shared/components/input/input.component';
import { Typography } from '../../shared/components/typography/typography.component';
import { AuthComponent } from './components/auth.component';

export function Login() {

    const dispatch = useDispatch();

    return (
        <AuthComponent >
            <Grid item container direction='column'>
                <Grid item container py='20px' direction='column' >
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            dispatch(userLogin(values) as keyof unknown)
                        }}
                    >
                        {({ handleSubmit, handleChange, values })=>
                            <>
                                <Input
                                    name='email'
                                    onChange={handleChange}
                                    value={values.email}
                                    label='Email' />
                                <Input
                                    name='password'
                                    onChange={handleChange}
                                    value={values.password}
                                    type='password'
                                    label='Password'
                                />
                                <Button click={handleSubmit} label='Login'/>
                            </>
                        }
                    </Formik>
                </Grid>
            </Grid>
        </AuthComponent>
    )
}

export default Login;