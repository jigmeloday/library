import { Grid, styled } from '@mui/material';

export const ReaderCard = styled(Grid)(
    ({theme, ...props}) => `
    padding: 14px;
    margin: 18px;
    height: fit-content;
    width: 30%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    `
)