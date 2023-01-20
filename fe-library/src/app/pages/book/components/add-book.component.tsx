import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../../shared/components/button/button.component';
import { Input } from '../../../shared/components/input/input.component';
import TextArea from '../../../shared/components/text-area/text-area.component';
import { CustomContainer } from '../../../shared/style/shared.style';
import { AddBookFormProps } from '../model/book.model';

export function AddBookForm (props: AddBookFormProps) {
    const [image, setImage] = useState<any>('')
    const handleUpload = (event: any) => {
        props.setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }
    const handleClick = () => {
        props.handleClick()
    };
    return(
        <>
            <Grid item container direction='row' py='12px'>
                <Grid item xs={6} px='4px'>
                    <Input
                        name='title'
                        onChange={props.handleChange}
                        value={props.values.title}
                        label='Book Title'  />
                </Grid>
                <Grid item xs={6} px='4px'>
                    <Input
                        name='author'
                        onChange={props.handleChange}
                        value={props.values.author}
                        label='Author' />
                </Grid>
            </Grid>
            <Grid item container direction='column'>
                <Input
                    name='category'
                    onChange={props.handleChange}
                    value={props.values.category}
                    label='Genre'  />
            </Grid>
            <Grid item container direction='row' py='12px' >
                <Grid item xs={6} px='4px' >
                    <Input
                        name='price'
                        onChange={props.handleChange}
                        value={props.values.price}
                        label='Price'  />
                </Grid>
                <Grid item xs={6} px='4px' >
                    <Input
                        name='quantity'
                        onChange={props.handleChange}
                        value={props.values.quantity}
                        label='Quantity' />
                </Grid>
            </Grid>
            <Grid item container direction='column'>
                <Grid item xs={6} py='12px' >
                    <Input
                        name='isbn'
                        onChange={props.handleChange}
                        value={props.values.isbn}
                        label='ISBN Number' />
                </Grid>
            </Grid>
            <Grid item container justifyContent='center' py='12px'>
                <Box className={ ['width--fit-content position--relative cursor--pointer', 'profile-upload'].join( ' ' ) }>
                    {
                        image ? <img src={image}
                                     width='126px' height='126px' className='br-60 object-fit--cover mb-16'
                                     alt='profile picture'/>: null
                    }
                    <CustomContainer bottom='20px' right='12px' className='br-60 px-6 py-4 cursor--pointer'

                    >
                        <Button label='Upload cover image' variant='contained' />
                    </CustomContainer>
                    <input type="file" name="myfile" accept="image/png, image/jpeg"
                           onChange={handleUpload} className={'profile-upload-input '} />
                </Box>
            </Grid>
            <Grid item container direction='column'>
                <TextArea
                    name='summary'
                    onChange={props.handleChange}
                    value={props.values.summary}
                    minRows={ 8 }
                />
            </Grid>
            <Grid item container justifyContent='end' py='12px'>
                <Box px='12px'>
                    <Button click={props.submit} label='send' variant='contained'/>
                </Box>
                <Button click={handleClick} label='Cancel' variant='outlined'/>
            </Grid>
        </>
    )
}