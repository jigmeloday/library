import { memo } from 'react';
import { CustomButton } from './button.style';
import { ButtonProps } from './model/button.model';

export function Button(props: ButtonProps) {
    return(
        <CustomButton onClick={props.click}>
            {props.label}
        </CustomButton>
    )
}

export default memo(Button)