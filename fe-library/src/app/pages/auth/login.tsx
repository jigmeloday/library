import { Grid } from "@mui/material";
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
                    <Grid item>
                      <Input />
                    </Grid>
                    <Grid item>
                        <Input />
                    </Grid>
                    <Button label='Login'/>
                </Grid>
            </Grid>
        </AuthComponent>
    )
}

export default Login;