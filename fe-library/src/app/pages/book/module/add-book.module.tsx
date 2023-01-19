import { Grid } from '@mui/material';
import { memo } from 'react';
import { Input } from '../../../shared/components/input/input.component';

export function AddBook() {
    return(
        <Grid container item>
          <Grid item container direction='row'>
              <Input />
              <Input />
          </Grid>
        </Grid>
    )
}

export default memo(AddBook)