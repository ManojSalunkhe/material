import React from 'react';
import {
    Typography,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Drawer,
    Divider,
    ListItemIcon,
    AppBar
} from '@material-ui/core';
import routes from '../routes/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { privatess } from "../routes/Routes";


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: "black",
        padding: theme.spacing(3),
    },
}));



function Drawers(props) {

    const classes = useStyles();

    const handleRedirect = (name) => {
        const result = routes.find((route) => route.name === name);
        const prRoute = privatess.find((route) => route.name === name);
        result && props.history.push(result.path);
        prRoute && props.history.push(prRoute.path);
        prRoute && prRoute.name === "Logout" && localStorage.clear();
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                    <Typography variant="h6" noWrap >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {
                        routes.map((route) => {
                            return (
                                route.drawerRoute &&
                                <ListItem key={route.name} button onClick={() => handleRedirect(route.name)}>
                                    <ListItemIcon>{route.icon}</ListItemIcon>
                                    <ListItemText primary={route.name} />
                                </ListItem>
                            )
                        })
                    }
                    <Divider />
                    {
                        localStorage.getItem("auth") && (
                            privatess.map((route) => {
                                return (
                                    <ListItem key={route.name} button onClick={() => handleRedirect(route.name)}>
                                        <ListItemIcon>{route.icon}</ListItemIcon>
                                        <ListItemText primary={route.name} />
                                    </ListItem>
                                )
                            })
                        )
                    }
                </List>
            </Drawer>
            <div className={classes.toolbar} />
        </div >

    )
}

export default Drawers
