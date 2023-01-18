import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { FetchAPI } from '../../services/api-services/base-api';
import { BookFacade } from '../../services/facade-service/book-facade';
import { Typography } from '../../shared/components/typography/typography.component';
import { BookCard } from './components/book-card.component';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '../../shared/components/button/button.component';
import { GetBooks } from '../../services/model/book.model';
import { BookCover } from '../../shared/utils/shared.utils';

export function BookListing() {
    const [book, setBook] = useState<GetBooks>()
    useEffect(() => {
        BookFacade.getBooks().then((res) => {
            setBook(res?.data)
        })
    }, [])
    return(
        <Grid container item >
            <Grid item container direction='row' py='22px' px='14px' justifyContent='center'>
                {
                    book?.books?.map(({ _id, title, category, coverImage, price, quantity, summary  }) =>
                        <Grid item py='20px' px='8px' width='24%' key={_id}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            {/*<MoreVertIcon />*/}
                                        </IconButton>
                                    }
                                    title={title}
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={coverImage? `http://localhost:3000/${coverImage}` : BookCover}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                   <Typography label={summary} />
                                </CardContent>
                                <Grid item container direction='row' px='6px' pb='6px'>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default BookListing;