import { Grid } from "@mui/material";
import { Formik } from "formik";
import { Button } from "../../shared/components/button/button.component";
import { Input } from "../../shared/components/input/input.component";
import { Typography } from "../../shared/components/typography/typography.component";
import { AuthComponent } from "./components/auth.component";

export function Login() {
    return (
        <AuthComponent>
            <Grid item container direction='column'>
                <Typography label='Login'/>
                <Grid item container py='20px' direction='column' justifyContent='center' alignItems='cneter'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => console.log(values)}
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