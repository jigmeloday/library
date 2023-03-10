import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectUpdateState, updateUser } from '../../../services/states/credential-state/credential.slice';
import { Button } from '../../../shared/components/button/button.component';
import { Input } from '../../../shared/components/input/input.component';
import { FORM } from '../constant/profile.constant';

export function EditProfile( props: any ) {
    const dispatch = useDispatch();
    const profile = useSelector(selectCurrentUser);
    const update = useSelector(selectUpdateState);

    return (
        <Grid container item py='12px'>
            <Formik
                initialValues={ { username: profile?.username || '', firstName: profile?.firstName || '', lastName: profile?.lastName || '' } }
                onSubmit={ (values) => {
                    const payload = {
                        data: values,
                        id: profile?.uid
                    }
                    dispatch(updateUser(payload) as keyof unknown);
                    update && props.handleClick()
                } }
            >
                { ( { handleSubmit, handleChange, values } ) =>
                    <Grid item container direction='column'>
                        <Grid item container py='24px'>
                            {
                                FORM.map( ( item ) =>
                                    <Grid key={item.id} item container xs={ item.name==='firstName' || item.name === 'lastName' ? 6: 12 } px='4px' py='8px'>
                                        <Input
                                            label={ item?.label }
                                            name={item.name}
                                            onChange={handleChange}
                                            value={values[item.name as keyof unknown]}
                                        />
                                    </Grid> )
                            }
                        </Grid>
                        <Grid item container direction='row' gap='14px' justifyContent='end'>
                            <Button label='Save' variant='contained' click={handleSubmit}/>
                            <Button label='Cancel' variant='outlined' click={ () => props.handleClick() }/>
                        </Grid>
                    </Grid>
                }
            </Formik>
        </Grid>
    )
}

export default memo( EditProfile )