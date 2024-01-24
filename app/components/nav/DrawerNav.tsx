'use client';

import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
// import { AiOutlineMenuFold } from "react-icons/ai";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer anchor='left' open={true} onClose={() => setOpen(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                            <ListItemText>Home</ListItemText>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>

            <IconButton onClick={() => setOpen(!open)}>
                <MenuRoundedIcon  />
            </IconButton>
        </>
    );
};

export default DrawerNav;