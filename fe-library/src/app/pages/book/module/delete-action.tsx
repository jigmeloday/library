import { Box, Grid } from '@mui/material';

import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from '../../../../assest/theme';
import { BookFacade } from '../../../services/facade-service/book-facade';
import { Button } from '../../../shared/components/button/button.component';
import { SharedModule } from '../../../shared/components/module/shared.module';
import { Typography } from '../../../shared/components/typography/typography.component';
import { CustomContainer } from '../../../shared/style/shared.style';

export function DeleteBook(props: { handleClick: () => void; book: string }) {
    const [file, setFile] = useState('');
    const dispatch = useDispatch();
    const id = useParams()['id'];
    const nav = useNavigate();
    const deleteBook = () => {
        BookFacade.deleteBook(id as string).then((res) => {
            res && nav('/books');
        })
    }
    return(
        <SharedModule title='Confirmation' isOpen={true}>
            <Grid container item direction='column'>
               <Box pb='18px'>
                   <Typography label={ `Are you sure you wnat to delete ${props?.book}?` }/>
               </Box>
                <Grid item container direction='row' justifyContent='space-around'>
                    <Button label='Delete' variant='contained' click={deleteBook}/>
                    <Button label='Cancel' variant='outlined' click={props.handleClick}/>
                </Grid>
            </Grid>
        </SharedModule>
    )
}

export default memo(DeleteBook)