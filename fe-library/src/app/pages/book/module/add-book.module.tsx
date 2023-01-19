import { Box, Grid } from '@mui/material';
import { memo, useState } from 'react';
import { theme } from '../../../../assest/theme';
import { Button } from '../../../shared/components/button/button.component';
import { Input } from '../../../shared/components/input/input.component';
import { TextArea } from '../../../shared/components/text-area/text-area.component';
import { CustomContainer } from '../../../shared/style/shared.style';
import './book.css'

export function AddBook() {
    const [image, setImage] = useState<any>('')
    const handleUpload = (event: any) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }
    return(
        <Grid container item >
          <Grid item container direction='row' py='12px'>
              <Grid item xs={6} px='4px'>
                  <Input label='Book Title'  />
              </Grid>
              <Grid item xs={6} px='4px'>
                  <Input label='Author' />
              </Grid>
          </Grid>
            <Grid item container direction='column'>
                <Input label='Genre'  />
            </Grid>
            <Grid item container direction='row' py='12px' >
                <Grid item xs={6} px='4px' >
                    <Input label='Price'  />
                </Grid>
                <Grid item xs={6} px='4px' >
                    <Input label='Quantity' />
                </Grid>
            </Grid>
            <Grid item container direction='column'>
                <Grid item xs={6} py='12px' >
                    <Input label='ISBN Number' />
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
                    minRows={ 8 }
                />
            </Grid>
        </Grid>
    )
}

export default memo(AddBook)