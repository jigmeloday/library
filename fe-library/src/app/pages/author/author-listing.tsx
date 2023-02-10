import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../assest/theme';
import { ProfileContainer } from '../../components/profile-image/profile-image.style';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCover } from '../../shared/utils/shared.utils';
import { ReaderCard } from './reader-card';

export function AuthorListing() {
    const [reader, setReader] = useState<any>();
    const nav = useNavigate();
    useEffect(() => {
        BookFacade.getReader().then((res) => {
            setReader(res?.data);
        })
    }, []);
    return(
        <Grid container item direction='row' py='34px' px='32px'>
            {
                reader?.map((items: any, index: number) =>
                    <ReaderCard item key={`${items?._id}+${index}`}>
                        <Grid item container direction='row' alignItems='center' xs={12} >
                            <ProfileContainer
                                item
                                xs={2}
                                borderRadius={50}
                                border={`4px solid
                                ${theme('light').palette.grey.A100}`}
                                width='60px' height='60px'
                                className='cursor--pointer'
                            >
                                <img src='../../../../images/reading-glasses-animate.svg' width='100%' height='100%' className='object-fit--cover' />
                            </ProfileContainer>
                            <Box  px='12px'>
                                <Typography label={items?.user?.email} />
                                <Typography label={items?.book?.title} />
                                <Typography label={items?.book?.author} />
                            </Box>
                        </Grid>
                        <Grid item container pt='12px'>
                            <Typography label={`${items?.book?.summary.substring(0, 100)|| 'Summary not available'}...`} />
                            <Box className='cursor--pointer' py='12px' onClick={() => nav(`/books/${items.book._id}`)}>
                                <img src={ items?.book?.coverImage ? `http://localhost:3000/${ items?.book?.coverImage }` : BookCover }
                                     width='100%' height='100%' className='object-fit--cover'/>
                            </Box>
                        </Grid>
                        <Grid item container>
                            hello
                        </Grid>
                    </ReaderCard>
                )
            }
        </Grid>
    )
}

export default AuthorListing;