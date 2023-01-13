import { Grid, styled } from '@mui/material';

export const ProfileContainer = styled(Grid)(
    ({theme, ...props}) => `
        width: ${props.width};
        height: ${props.height};
        object-fit: cover;
        border-radius: ${props.borderRadius};
        border: ${props.border};
    `
);
