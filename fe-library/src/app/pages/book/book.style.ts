import { Box, styled } from '@mui/material';

export const BookCard = styled(Box)(
    ({theme, ...props}) => `
    height: fit-content;
    padding: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    `
)