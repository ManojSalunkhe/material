import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Grid,
    makeStyles,
    TextField,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        margin: "auto",
        marginTop: "7%",
        width: "470px"
    },
    field: {
        marginTop: 15,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        marginBottom: 20
    }
})

function Register(props) {

    const classes = useStyles()
    const initialData = { username: "", email: "", password: "", }
    const [registerCredentials, setRegisterCredentials] = useState(initialData)


    const handleRegisterCredentialsChange = (event) => {
        if (event.target.name === "USERNAME") {
            setRegisterCredentials({ ...registerCredentials, username: event.target.value })
        }
        if (event.target.name === "EMAIL") {
            setRegisterCredentials({ ...registerCredentials, email: event.target.value })
        }
        if (event.target.name === "PASSWORD") {
            setRegisterCredentials({ ...registerCredentials, password: event.target.value })
        }
    }

    const handleRegister = () => {
        const data = {
            username: registerCredentials.username,
            email: registerCredentials.email,
            password: registerCredentials.password
        }
        console.log(data)
        setRegisterCredentials(initialData)
    }
    return (
        <div>
            <Card align="center" className={classes.card}>
                <h1>Register</h1>
                <CardContent>
                    <b>already a member ? </b> <Link to="/login">login</Link>
                    <Grid item>
                        <TextField
                            className={classes.field}
                            label="username"
                            placeholder="enter username"
                            variant="outlined"
                            value={registerCredentials.username}
                            name="USERNAME"
                            onChange={(event) => handleRegisterCredentialsChange(event)}
                            fullWidth
                            required
                        ></TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.field}
                            label="email"
                            placeholder="email"
                            variant="outlined"
                            value={registerCredentials.email}
                            name="EMAIL"
                            onChange={(event) => handleRegisterCredentialsChange(event)}
                            type="email"
                            fullWidth
                            required
                        >
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.field}
                            label="password"
                            placeholder="password"
                            variant="outlined"
                            value={registerCredentials.password}
                            name="PASSWORD"
                            onChange={(event) => handleRegisterCredentialsChange(event)}
                            type="password"
                            fullWidth
                            required
                        >
                        </TextField>
                    </Grid>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleRegister}
                    >
                        Sign up
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register
