import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material';
import { memo } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storage from 'redux-persist/es/storage';
import { clearToken } from '../../../services/states/credential-state/credential.action';

export function HeaderMenu() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const logOut = () => {
        localStorage.clear();
        dispatch(clearToken())
    }
    return(
        <>
            <MenuItem onClick={() => nav('/profile')} >
                <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem >
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem >
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={logOut}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </>
    )
}
export default memo(HeaderMenu)