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
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(result.data)
        }
        apiCall()
    }, [])

    const result = users.filter((user) => {
        return user.id === Number(id)
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
                                <Avatar alt={user.name} src="." className={classes.avatar} />
                                <p> name : {user.name}</p>
                                <p> email : {user.email}</p>
                                <p>phone : {user.phone}</p>
                                <p>website : {user.website}</p>
                                <p>address : street - {user.address.street} ,city - {user.address.city}</p>
                                <p>company : name - {user.company.name}</p>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}

export default User
