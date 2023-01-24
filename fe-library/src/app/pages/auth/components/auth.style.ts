import { Grid, styled } from "@mui/material";

export const AuthCard = styled(Grid)(
    ({theme, ...props}) => `
    width: 68%;
    padding: 22px;
    height: 86%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    `
)