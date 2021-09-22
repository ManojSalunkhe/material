import React, { useState } from 'react';
import {
    Button,
    makeStyles,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
    h1Tag: {
        textAlign: "center"
    },
    fields: {
        margin: 5
    },

    button: {
        marginLeft: 15,
        marginTop: 25,
        marginBottom: 25,
        width: 260
    }
})

function Form(props) {

    const classes = useStyles()

    const { handleAdd, handleClose, customer, handleEditSave, handleEditClose } = props

    const [fName, setFName] = useState(customer ? customer.firstName : '')
    const [lName, setLName] = useState(customer ? customer.lastName : '')
    const [contact, setContact] = useState(customer ? customer.contact : '')
    const [email, setEmail] = useState(customer ? customer.email : '')
    // const [conformOpen, setConformOpen] = useState(false)

    const handleChange = (e) => {
        if (e.target.name === "first") {
            setFName(e.target.value)
        }
        if (e.target.name === "last") {
            setLName(e.target.value)
        }
        if (e.target.name === "contact") {
            setContact(e.target.value)
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
    }

    const handleClosing = () => {
        if (customer) {
            handleEditClose()
        } else {
            handleClose()
        }
    }

    // const handleConformation = (data) => {
    //     if (data === "accept") {
    //         handleSubmit()
    //         setConformOpen(false)
    //     }
    //     if (data === "decline") {
    //         setConformOpen(false)
    //     }
    // }

    const handleSubmit = () => {
        const newdata = {
            id: Number(new Date()),
            firstName: fName,
            lastName: lName,
            contact: contact,
            email: email
        }
        const editedData = {
            firstName: fName,
            lastName: lName,
            contact: contact,
            email: email
        }

        if (handleAdd) {
            handleAdd(newdata)
        }
        if (handleEditSave) {
            handleEditSave(editedData)
        }
    }

    return (
        <div className={classes.container}>
            {
                customer ? <h1 className={classes.h1Tag}>Edit Form</h1> : <h1 className={classes.h1Tag} >Add Form</h1>
            }
            <TextField className={classes.fields}
                variant="outlined"
                label="first name"
                required
                fullWidth
                value={fName}
                name="first"
                onChange={(e) => handleChange(e)}
            >
            </TextField>
            <TextField
                className={classes.fields}
                variant="outlined"
                label="last name"
                required
                fullWidth
                value={lName}
                name="last"
                onChange={(e) => handleChange(e)}
            >

            </TextField>
            <TextField
                className={classes.fields}
                variant="outlined"
                placeholder="number"
                required
                fullWidth
                type="number"
                value={contact}
                name="contact"
                onChange={(e) => handleChange(e)}
            >
            </TextField>
            <TextField
                className={classes.fields}
                variant="outlined"
                label="email"
                required
                fullWidth
                type="email"
                value={email}
                name="email"
                onChange={(e) => handleChange(e)}
            >
            </TextField>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >save
            </Button>
            <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleClosing}
            >cancel
            </Button>
        </div>
    )
}

export default Form
