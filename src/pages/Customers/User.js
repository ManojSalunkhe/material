import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {
    makeStyles,
    Card,
    Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divTag: {
        textAlign: "center"
    },
    heading: {
        color: "white"
    },
    info: {
        width: 350,
        marginTop: 50,
        margin: "auto",
        border: "2px solid gray",
        borderRadius: 10,
        color: "#FFFFFF",
        backgroundColor: "#323030",
        fontWeight: "bold"
    },
    avatar: {
        backgroundColor: theme.palette.warning.dark,
        width: 50,
        margin: "auto"
    }
}))

function User() {

    const { id } = useParams()

    const classes = useStyles()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const result = await axios.get('http://localhost:3601/employees')
            setUsers(result.data)
        }
        apiCall()
    }, [])

    const result = users.filter((user) => {
        return user.id == id
    })

    return (
        <div className={classes.divTag}>
            <h1 className={classes.heading}> User Details </h1>
            {
                result && (
                    result.map((user) => {
                        return (
                            <Card key={user.id} className={classes.info}>
                                <p> id : {user.id}</p>
                                <Avatar alt={user.firstName} src="." className={classes.avatar} />
                                <p> First Name : {user.firstName}</p>
                                <p> Last Name : {user.lastName}</p>
                                <p>Email : {user.email}</p>
                                <p>Mobile : {user.mobile}</p>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}

export default User
