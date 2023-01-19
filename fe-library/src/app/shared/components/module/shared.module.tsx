import * as React from 'react';
import { memo, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SharedModuleProps } from '../../models/shared.model';

export function SharedModule(props: SharedModuleProps) {
    const [open, setOpen] = useState(props?.isOpen);
    const handleClick = () => {
       props.handleClick()
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClick}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Disagree</Button>
                    <Button onClick={handleClick} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(SharedModule)