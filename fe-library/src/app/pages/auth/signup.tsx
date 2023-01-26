import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/states/credential-state/credential.slice';
import { Button } from '../../shared/components/button/button.component';
import { Input } from '../../shared/components/input/input.component';
import { Typography } from '../../shared/components/typography/typography.component';
import { AuthComponent } from './components/auth.component';
import { SIGNUP_SCHEMA } from './misc/validation/auth.misc';

export function SignUp() {

    const dispatch = useDispatch();
    const nav = useNavigate()
    return (
        <AuthComponent>
            <Grid item container direction='column'>
                <Grid item container py='20px' direction='column'>
                    <Grid item container direction='column' alignItems='center' xs={12}>
                        <Typography label='Welcome' variant='h5' />
                        <Typography label='Welcome! Please enter your details.' variant='subtitle2' color='gray' />
                    </Grid>
                    <Grid item container py='22px'>
                        <Formik
                            initialValues={ { email: '', password: '', cPassword: '' } }
                            validationSchema={SIGNUP_SCHEMA}
                            onSubmit={ ( values ) => {
                                dispatch( userLogin( { email: values.email, password: values.password } ) as keyof unknown )
                            } }
                        >
                            { ( { handleSubmit, handleChange, values, errors, touched, handleBlur } ) =>
                                <Grid item container direction='column'>
                                    <Box py='12px'>
                                        <Input
                                            name='email'
                                            onChange={ handleChange }
                                            value={ values.email }
                                            onBlur={ handleBlur }
                                            error={!!(touched.email && errors.email)}
                                            helperText={touched.email && errors.email ? errors.email : ''}
                                            label='Email'/>

                                    </Box>
                                    <Box py='12px'>
                                        <Input
                                            name='password'
                                            onChange={ handleChange }
                                            value={ values.password }
                                            onBlur={ handleBlur }
                                            helperText={touched.password && errors.password ? errors.password : ''}
                                            error={!!(touched.password && errors.password)}
                                            type='password'
                                            label='Password'
                                        />
                                    </Box>
                                    <Box py='12px'>
                                        <Input
                                            name='cPassword'
                                            onChange={ handleChange }
                                            value={ values.cPassword }
                                            onBlur={ handleBlur }
                                            helperText={touched.cPassword && errors.cPassword ? errors.cPassword : ''}
                                            error={!!(touched.cPassword && errors.cPassword)}
                                            type='password'
                                            label='Confirm Password'
                                        />
                                    </Box>

                                    <Button click={ handleSubmit } label='Sign Up' variant='contained' />
                                    <Grid item container justifyContent='center' py='24px'>
                                        <Box px='4px'>
                                            <Typography
                                                label='Already have an account? '
                                                variant='subtitle2'
                                                fontWeight='200'
                                            />
                                        </Box>
                                        <Typography className='cursor--pointer'
                                                    label=' Log In'
                                                    variant='subtitle2'
                                                    click={() => nav('/authentication/login') }
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

export default SignUp;