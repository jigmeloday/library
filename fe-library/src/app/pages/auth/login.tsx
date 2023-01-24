import { Box, Grid } from '@mui/material';
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
        <AuthComponent>
            <Grid item container direction='column'>
                <Grid item container py='20px' direction='column'>
                    <Grid item container direction='column' alignItems='center' xs={12}>
                       <Typography label='Welcome Back' variant='h5' />
                        <Typography label='Welcome back! Please enter your details.' variant='subtitle2' color='gray' />
                    </Grid>
                    <Grid item container py='22px'>
                        <Formik
                            initialValues={ { email: '', password: '' } }
                            onSubmit={ ( values ) => {
                                dispatch( userLogin( values ) as keyof unknown )
                            } }
                        >
                            { ( { handleSubmit, handleChange, values } ) =>
                                <Grid item container direction='column'>
                                    <Box py='12px'>
                                        <Input
                                            name='email'
                                            onChange={ handleChange }
                                            value={ values.email }
                                            label='Email'/>

                                    </Box>
                                    <Box py='12px'>
                                        <Input
                                            name='password'
                                            onChange={ handleChange }
                                            value={ values.password }
                                            type='password'
                                            label='Password'
                                        />
                                    </Box>
                                    <Grid item container justifyContent='end' py='12px'>
                                        <Typography className='cursor--pointer' label='Forgot password' variant='subtitle2' fontWeight='200' />
                                    </Grid>
                                    <Button click={ handleSubmit } label='Login' variant='contained' />
                                    <Grid item container justifyContent='center' py='24px'>
                                       <Box px='4px'>
                                           <Typography
                                               label='Dont have account? '
                                               variant='subtitle2'
                                               fontWeight='200'
                                           />
                                       </Box>
                                        <Typography className='cursor--pointer'
                                                    label=' Sign Up'
                                                    variant='subtitle2'
                                        />
                                    </Grid>
                                </Grid>
                            }
                        </Formik>
                    </Grid>
                </Grid>
            </Grid>
        </AuthComponent>
    )
}

export default Login;