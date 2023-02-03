import { memo } from 'react';
import { TypographyProps } from './model/typography.model';
import { CustomTypography } from './typography.style';

export function Typography(props: TypographyProps) {
    return(
        <CustomTypography color={props?.color} variant={props?.variant} align={props?.align} sx={props?.sx}
                          className={props?.className} fontWeight={props?.fontWeight} fontSize={props?.fontSize} onClick={props?.click}
                          id={props?.id} noWrap={props?.noWrap} data-cy={props.dataCy}>
            {props?.label}
        </CustomTypography>
    )
}

export default memo(Typography)