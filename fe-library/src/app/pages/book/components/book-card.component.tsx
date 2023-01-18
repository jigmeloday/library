import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import { memo } from 'react';
import { Typography } from '../../../shared/components/typography/typography.component';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Book } from '../../../services/model/book.model';
import { BookCover } from '../../../shared/utils/shared.utils';
import { Button } from '../../../shared/components/button/button.component';

export function BookCard(props:{ items: Book }) {

    return(
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={props?.items?.coverImage? `http://localhost:3000/${props?.items?.coverImage}` : BookCover}
                alt="Paella dish"
            />
            <CardContent>
                <Grid item container direction='column'>
                    <Typography label={props?.items?.title} variant='body1' />
                    <Typography label={props?.items?.author} variant='caption' />
                    <Typography label={props?.items?.category} variant='caption'  />
                </Grid>
                {/*<Typography label={props?.items?.summary} />*/}
            </CardContent>
            <Grid item container justifyContent='center' pb='20px'>
                <Button variant='outlined' label='read' />
            </Grid>
            {/*migth need in future*/}
            {/*<Grid item container direction='row' px='6px' pb='6px'>*/}
            {/*    <IconButton aria-label="add to favorites">*/}
            {/*        <FavoriteIcon />*/}
            {/*    </IconButton>*/}
            {/*    <IconButton aria-label="share">*/}
            {/*        <ShareIcon />*/}
            {/*    </IconButton>*/}
            {/*</Grid>*/}
        </Card>
    )
}

export default memo(BookCard)