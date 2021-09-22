import React, { useState } from 'react';
import {
    Typography,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Drawer,
    IconButton,
    Divider,
    ListItemIcon,
    Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import routes from '../routes/Routes';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 140;

function Drawers(props) {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true)

    const handleDrawerClose = () => setOpen(false)

    const handleRedirect = (name) => {
        const result = routes.find((route) => {
            return route.name === name
        })
        if (result.name === "Logout") {
            localStorage.clear();
        }
        props.history.push(`${result.path}`)

    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Customers List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                        routes.map((route) => {
                            if (route.name !== "Login" && route.name !== "Register") {
                                return (
                                    <ListItem key={route.name} button onClick={() => handleRedirect(route.name)}>
                                        <ListItemIcon>{route.icon}</ListItemIcon>
                                        <ListItemText primary={route.name} />
                                    </ListItem>
                                )
                            }
                        })
                    }
                </List>
                <Divider />
            </Drawer>
        </Box >

    )
}

export default Drawers
