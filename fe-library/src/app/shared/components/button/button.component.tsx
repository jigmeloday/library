import { memo } from 'react';
import { CustomButton } from './button.style';
import { ButtonProps } from './model/button.model';
import { SxProps, Theme } from '@mui/material';

export function Button(props: ButtonProps) {
    return(
        <CustomButton
            color={props?.color}
            variant={props?.variant}
            onClick={props?.click}
            disabled={props?.disabled}
            className={props?.className}
            sx={props.sx as SxProps<Theme>}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            type={props?.type}
        >
            {props.label}
        </CustomButton>
    )
}

export default memo(Button)