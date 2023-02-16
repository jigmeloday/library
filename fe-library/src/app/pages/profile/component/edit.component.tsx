import { Grid } from '@mui/material';
import { Formik } from 'formik';
import { memo } from 'react';
import { Button } from '../../../shared/components/button/button.component';

export function EditProfile(props: any) {

    return(
        <Grid container item py='12px'>
            <Formik
                initialValues={{ firstName: '', lastName: '' }}
                onSubmit={() => console.log('')}
            >
                {({handleSubmit, handleChange}) =>
                    <Grid item container>
                        hello

                        <Button click={() => props.handleClick()} />
                    </Grid>
                }
            </Formik>
        </Grid>
    )
}

export default memo(EditProfile)