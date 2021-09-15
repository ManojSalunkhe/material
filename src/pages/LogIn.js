import React from 'react'
import { Grid, Card, CardContent, Button, TextField, makeStyles, Avatar } from '@material-ui/core'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    card: {
        margin: "auto",
        marginTop: "7%",
        width: "470px",
    },

    avatar: {
        marginTop: 15,
        backgroundColor: "blue",
        width: "50px"
    },

    field: {
        marginTop: 20,
        marginBottom: 20,
    },

    button: {
        marginTop: 20,
        marginBottom: 20
    }
})

function LogIn(props) {

    const classes = useStyles()


    const handleClick = () => {
        props.history.push("/customerslist")
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <Card align="center" className={classes.card} >
                <Avatar className={classes.avatar}><VpnKeyIcon /></Avatar>
                <h1>Login</h1>
                <CardContent>
                    <Grid item >
                        <TextField className={classes.field} label="username" placeholder="enter username" variant="outlined" fullWidth required></TextField>
                    </Grid>
                    <Grid item>
                        <TextField className={classes.field} label="password" placeholder="password" variant="outlined" type="password" fullWidth required></TextField>
                    </Grid>
                    <Link to="/">Forgot password ?</Link>
                    <Button className={classes.button} variant="contained" color="primary" fullWidth onClick={handleClick}>Login</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default LogIn
