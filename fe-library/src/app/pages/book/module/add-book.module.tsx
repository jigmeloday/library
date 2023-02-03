import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../assest/theme';
import { BookFacade } from '../../../services/facade-service/book-facade';
import { Book } from '../../../services/model/book.model';
import { getBook } from '../../../services/states/book-state/book.slice';
import { getCategory, selectCategory } from '../../../services/states/shared-state/shared.slice';
import { Input } from '../../../shared/components/input/input.component';
import { SharedModule } from '../../../shared/components/module/shared.module';
import { TextArea } from '../../../shared/components/text-area/text-area.component';
import { CustomContainer } from '../../../shared/style/shared.style';
import { AddBookForm } from '../components/add-book.component';
import './book.css'

export function AddBook(props: { handleClick: () => void; book?: Book }) {
    const [file, setFile] = useState('');
    const dispatch = useDispatch();
    const category = useSelector(selectCategory)
    const nav = useNavigate();
    useEffect(() => {
        if ( !category ) {
            dispatch(getCategory() as keyof unknown)
        }
    }, [])
    return(
        <SharedModule title='Add Book' isOpen={true}>
            <Grid container item >
               <Formik
                   initialValues={{ 
                       title: props?.book?.title || '',
                       author: props?.book?.author || '',
                       category: props?.book?.category || '',
                       price: props?.book?.price || '',
                       quantity: props?.book?.quantity || '',
                       isbn: '',
                       summary: props?.book?.summary || '',
                   }}
                   onSubmit={(values) => {
                       const data = {
                           ...values,
                           coverImage: file
                       }

                       !props.book?._id ? BookFacade.addBook(data).then(
                           (res) =>
                           {
                               props.handleClick();
                               dispatch(getBook() as keyof unknown)
                           }
                       ) : BookFacade.editBook({
                           ...values,
                           _id: props.book?._id
                       }) .then((resp) => {
                           props.handleClick();
                           nav('/books')
                       }).catch((error) => console.log(error))
                   } }
               >
                   {({ handleChange, handleSubmit, values }) =>
                       <AddBookForm
                           edit={!props?.book?._id}
                           setFile={setFile}
                           category={category?.category}
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