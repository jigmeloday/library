import { Card } from '@mui/material';
import { memo } from 'react';

export function BookCard(props: any) {
    return(
        <Card>
            {props.children}
        </Card>
    )
}

export default memo(BookCard)