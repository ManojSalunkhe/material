import React from 'react';
import {
    Button,
    makeStyles,
    Box
} from '@material-ui/core';
import Drawers from '../../react-hool-form/Drawers'

const useStyles = makeStyles({
    d: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        marginLeft: 550,
        gap: 250,

    }
    // heading: {
    //     width: "98%",
    //     height: 50,
    //     margin: "auto",
    //     marginTop: 100,
    //     display: "flex",
    //     justifyContent: "center",
    //     border: "2px solid white",
    //     borderRadius: 15,
    //     backgroundColor: "black",
    //     fontStyle: "italic",
    //     color: "white"
    // },
    // button: {
    //     fontWeight: 800,
    //     fontStyle: "italic",
    //     fontSize: 20,
    //     width: 250,
    //     border: "2px solid white",
    //     borderRadius: 10,
    //     backgroundColor: "black"
    // }
})

function Home(props) {

    const classes = useStyles();


    const handleClick = () => {
        localStorage.getItem("auth") ? props.history.push("/about") : props.history.push("/login")
    }
    return (
        <div  >
            <Drawers {...props} className={classes.drawer} />
            <div className={classes.d}>
                <h1 className={classes.heading}>USER MANAGEMENT SYSTEM</h1>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>Let's Begin...</Button>
            </div>
            {/* <Box display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh" >
                <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>Let's Begin...</Button>
            </Box> */}
        </div >
    )
}

export default Home
