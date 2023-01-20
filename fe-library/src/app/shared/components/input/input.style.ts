import { styled, TextField } from '@mui/material';
import { memo } from 'react';

export const CustomInput = styled(TextField)(
    ({ theme, ...props }) => `
  &.custom--input {
     background-color: ${ theme.palette.altoGray.main };
      .MuiOutlinedInput {
        &-notchedOutline {
          border: unset;
       }

        &-root {
          height: 2.5rem;
        }
      }
   }

  &.white--input {
     .MuiInputLabel-root {
       color: white;
     }

      .MuiOutlinedInput {
        &-notchedOutline {
          border-color: white;
        }
      }
   }
  `
);

export default memo( CustomInput )