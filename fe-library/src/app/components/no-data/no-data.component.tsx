import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { theme } from '../../../assest/theme';
import { Typography } from '../../shared/components/typography/typography.component';

export function NoDataComponent() {
    return(
        <Grid container item justifyContent='center'>
            <Box height='250px'>
              <img src='../../../../images/no-data-animate.svg' height='100%' width='100%' />
          </Box>
            <Grid item container justifyContent='center'>
                <Typography label='No Data'  variant='body1' fontWeight='bold' />
            </Grid>
        </Grid>
    )
}

export default memo(NoDataComponent)