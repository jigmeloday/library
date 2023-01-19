import { Button, Grid, styled } from '@mui/material';
import { Typography as MatTypography } from '@mui/material';
import { theme } from '../../../assest/theme';

export const CustomContainer = styled(Grid, {
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'customProp',
})<{ customProp?: boolean; color?: string, backgroundColor?: string | any, border?: string, background?: string }>
(({ theme, customProp, color, backgroundColor, background, border }) => ({
        backgroundColor,
        background,
        color,
        border
    }),
    `
  .hover-primary:hover {
   .MuiIcon-root, .MuiTypography-root {
    color: ${ theme('light').palette.primary.main }
   }
  }
`
);