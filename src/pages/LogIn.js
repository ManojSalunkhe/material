import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Button,
    TextField,
    makeStyles,
    Avatar
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import jwt from 'jsonwebtoken'

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

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(6)
})

function LogIn(props) {

    const classes = useStyles()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    // const [credentials, setCredentials] = useState({ username: "", password: '' })

    // const handleCredentialsChange = (event) => {
    //     if (event.target.name === "USERNAME") {
    //         setCredentials({ ...credentials, username: event.target.value })
    //     }
    //     if (event.target.name === "PASSWORD") {
    //         setCredentials({ ...credentials, password: event.target.value })
    //     }
    // }

    const handleLogin = (data) => {
        const apiCall = async () => {
            try {
                const result = await axios.post("http://localhost:3601/login", data)
                console.log('logo', result.data)
                if (result.data.token) {
                    localStorage.setItem("auth", JSON.stringify(result.data.token))
                    alert("successfully logged in")
                }
                const auth = JSON.parse(localStorage.getItem("auth"))
                if (auth) {
                    props.history.push("/customer-list")
                }
            } catch (err) {
                alert("wrong credentials")
                console.log("login err here", err)
            }
        }
        apiCall()
    }

    return (
        <div  >
            <Card align="center" className={classes.card} >
                <Avatar className={classes.avatar}><VpnKeyIcon /></Avatar>
                <h1>Login</h1>
                <b>don't have account ? </b> <Link to="/register">register here</Link>
                <CardContent>
                    < form onSubmit={handleSubmit(handleLogin)} >
                        <Grid item >
                            < TextField
                                {...register("email")}
                                label="email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <p> {errors.email?.message}</p>
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register("password")}
                                label="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            {errors.password?.message}
                        </Grid>
                        <Link to="/">Forgot password?</Link>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                        >
                            login
                        </Button>
                    </form >
                </CardContent>
            </Card>
        </div >
    )
}

export default LogIn


// PREVIOUS CODE IT IS
 // <div  >
        //     <Card align="center" className={classes.card} >
        //         <Avatar className={classes.avatar}><VpnKeyIcon /></Avatar>
        //         <h1>Login</h1>
        //         <CardContent>
        //             <b>don't have account ? </b> <Link to="/register">register here</Link>
        //             <Grid item >
        //                 <TextField className={classes.field}
        //                     label="username"
        //                     placeholder="enter username"
        //                     variant="outlined"
        //                     value={credentials.username}
        //                     name="USERNAME"
        //                     onChange={(event) => handleCredentialsChange(event)}
        //                     fullWidth
        //                     required
        //                 >
        //                 </TextField>
        //             </Grid>
        //             <Grid item>
        //                 <TextField className={classes.field}
        //                     label="password"
        //                     placeholder="password"
        //                     variant="outlined"
        //                     value={credentials.password}
        //                     name="PASSWORD"
        //                     onChange={(event) => handleCredentialsChange(event)}
        //                     type="password"
        //                     fullWidth
        //                     required
        //                 >
        //                 </TextField>
        //             </Grid>
        //             <Link to="/">Forgot password ?</Link>
        //             <Button
        //                 className={classes.button}
        //                 variant="contained"
        //                 color="primary"
        //                 fullWidth
        //                 onClick={handleLogin}
        //             >
        //                 login
        //             </Button>
        //         </CardContent>
        //     </Card>
        // </div>


