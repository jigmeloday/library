import { memo } from 'react';
import { CustomInput } from './input.style';
import { InputModel } from './model/input.model';

export function Input(props: InputModel) {
    return(
        <CustomInput fullWidth
                     className={props?.className}
                     id={props?.id}
                     name={props?.name}
                     onBlur={props?.onBlur}
                     variant={props?.variant}
                     placeholder={props?.placeholder}
                     label={props?.label}
                     InputProps={props?.InputProps}
                     type={props?.type}
                     value={props?.value}
                     onChange={props?.onChange}
                     helperText={props?.helperText}
                     error={props?.error}
                     sx={props?.sx}
                     required={props?.required}
        />
    )
}

export default memo(Input)