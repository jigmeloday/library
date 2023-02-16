import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import { memo } from 'react';
import { Button } from '../../../shared/components/button/button.component';
import { Input } from '../../../shared/components/input/input.component';

export function EditProfile( props: any ) {
    const FORM = [
        {
            id: '1',
            label: 'Username',
            name: 'username'
        },
        {
            id: '2',
            label: 'First Name',
            name: 'firstName'
        },
        {
            id: '3',
            label: 'Last Name',
            name: 'lastName'
        }, {
            id: '4',
            label: 'Username',
            name: 'username'
        }
    ]
    return (
        <Grid container item py='12px'>
            <Formik
                initialValues={ { firstName: '', lastName: '' } }
                onSubmit={ () => console.log( '' ) }
            >
                { ( { handleSubmit, handleChange } ) =>
                    <Grid item container direction='column'>
                        <Box py='24px'>
                            {
                                FORM.map( ( item ) =>
                                    <Box py='8px'>
                                        <Input label={ item?.label }/>
                                    </Box> )
                            }
                        </Box>
                        <Button label='Cancel' click={ () => props.handleClick() }/>
                    </Grid>
                }
            </Formik>
        </Grid>
    )
}

export default memo( EditProfile )