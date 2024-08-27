import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import burgerMenu from '../assets/burger-menu.svg';
import { useNavigate } from 'react-router-dom';

export default function NavMenu() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (route) => {
        navigate(route);
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img className='burger-menu' src={burgerMenu} alt="Menu"/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleClose('/services')}>Services</MenuItem>
                <MenuItem onClick={() => handleClose('/estimate')}>Estimate</MenuItem>
            </Menu>
        </div>
    );
}
