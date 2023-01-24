import { Menu } from '@mui/material';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectMenu } from '../../../services/states/shared-state/shared.slice';
import { SharedMenuPorps } from './model/menu.model';

export function SharedMenu(props: SharedMenuPorps ) {
    return(
        <Menu
            anchorEl={props.anchorEl}
            id="account-menu"
            open={props.open}
            onClose={props.handleClose}
            onClick={props.handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {props.children}
        </Menu>
    )
}

export default memo(SharedMenu)