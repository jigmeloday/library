import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating } from '@mui/material';
import { memo } from 'react';
import { Typography } from '../../../shared/components/typography/typography.component';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Book } from '../../../services/model/book.model';
import { BookCover } from '../../../shared/utils/shared.utils';
import { Button } from '../../../shared/components/button/button.component';
import { ProfileContainer } from '../../../components/profile-image/profile-image.style';
import { useNavigate } from 'react-router-dom';

export function BookCard(props:{ items: Book }) {
    const nav = useNavigate();
    return(
        <Card>
            <Grid item container justifyContent='center'>
                <ProfileContainer height='400px' >
                    <img src={props?.items?.coverImage? `http://localhost:3000/${props?.items?.coverImage}` : BookCover} width='100%' height='100%'   className='object-fit--cover'/>
                </ProfileContainer>
            </Grid>
            {/*couldn't decide which to use*/}
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    height="300"*/}
            {/*    image={props?.items?.coverImage? `http://localhost:3000/${props?.items?.coverImage}` : BookCover}*/}
            {/*    alt="Paella dish"*/}
            {/*/>*/}
            <CardContent>
                <Grid item container direction='column'>
                    <Typography label={props?.items?.title} variant='body1' />
                    <Typography label={props?.items?.author} variant='caption' />
                    <Typography label={props?.items?.category?.name} variant='caption'  />
                    {/*not sure whether to use or not*/}
                    {/*<Rating name="read-only" value={4} readOnly />*/}
                </Grid>
            </CardContent>
            <Grid item container justifyContent='center' pb='20px'>
                <Button click={() => nav(`/books/${props.items._id}`)} variant='outlined' label='View More' />
            </Grid>
        </Card>
    )
}

export default memo(BookCard)