import { Grid, hexToRgb, styled } from '@mui/material';

export const HeaderContainer = styled(Grid)(
    ({ theme, ...props }) => `
  top: 0;
  z-index: 100;
  padding: 12px 24px;
  width: 100%;
  background: ${ theme.palette.white.main };
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  `
);
