import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import { memo, useState } from 'react';
import { theme } from '../../../../assest/theme';
import { Button } from '../../../shared/components/button/button.component';
import { Input } from '../../../shared/components/input/input.component';
import { SharedModule } from '../../../shared/components/module/shared.module';
import { TextArea } from '../../../shared/components/text-area/text-area.component';
import { CustomContainer } from '../../../shared/style/shared.style';
import { AddBookForm } from '../components/add-book.component';
import './book.css'

export function AddBook(props: { handleClick: () => void }) {
    const [file, setFile] = useState('');

    return(
        <SharedModule title='Add Book' isOpen={true}>
            <Grid container item >
               <Formik
                   initialValues={{ title: '' }}
                   onSubmit={(values) => console.log(values) }
               >
                   {({ handleChange, handleSubmit, values }) =>
                       <AddBookForm
                           setFile={setFile}
                           handleChange={handleChange} 
                           values={values}
                           submit={handleSubmit}
                           handleClick={props.handleClick}
                       />
                   }
               </Formik>
            </Grid>
        </SharedModule>
    )
}

export default memo(AddBook)