import { memo } from 'react';
import { TypographyProps } from './model/typography.model';
import { CustomTypography } from './typography.style';

export function Typography(props: TypographyProps) {
    return(
       <CustomTypography color={props.color} onClick={props.click}>
           {props?.label}
       </CustomTypography>
    )
}

export default memo(Typography)