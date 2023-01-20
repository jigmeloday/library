import styles from './text-area.module.scss';
import { TextareaAutosize } from '@mui/material';
import { TextAreaProps } from './model/text-area.model';

export function TextArea ( props: TextAreaProps ): JSX.Element {
    return (
        <TextareaAutosize
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            onBlur={props.onBlur}
            className='width--full text-area p-8'
            minRows={ props.minRows || 8 }
            placeholder={props.label}
        />
    );
}

export default TextArea;
