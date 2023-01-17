import { styled, Typography } from '@mui/material';

export const CustomTypography = styled(Typography)(
    ({ theme, ...props }) => `
   color: ${props.color || theme.palette.black.dark};
   font-weight: ${props.fontWeight ||theme.typography.fontWeightRegular};
   font-size: ${props.fontSize ||theme.typography.htmlFontSize};

   &.hover-primary:hover {
       &.MuiTypography-root  {
          color: ${ theme.palette.primary.main }
       }
     }
  }
 `
);