import React from 'react';
import { useParams } from 'react-router-dom';
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

    const users = [
        { id: 1, firstName: "Rahul", lastName: "cool", contact: "9876543210", email: "rahul@gmail.com" },
        { id: 2, firstName: "Manish", lastName: "dwig", contact: "9876543210", email: "dwig@gmail.com" },
        { id: 3, firstName: "Mani", lastName: "thammana", contact: "9876543210", email: "thammana@gmail.com" }
    ]

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
                                <Avatar alt={user.firstName} src="." className={classes.avatar} />
                                <p> First name : {user.firstName}</p>
                                <p> Last name : {user.lastName}</p>
                                <p>contact : {user.contact}</p>
                                <p>email : {user.email}</p>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}

export default User
