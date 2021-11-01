import React, { useState } from 'react';
import {
    Button,
    makeStyles,
    TextField
} from '@material-ui/core';
import axios from 'axios';

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

    const [firstName, setFirstName] = useState(customer ? customer.firstName : '')
    const [lastName, setLastName] = useState(customer ? customer.lastName : '')
    const [mobile, setMobile] = useState(customer ? customer.mobile : '')
    const [email, setEmail] = useState(customer ? customer.email : '')
    // const [conformOpen, setConformOpen] = useState(false)

    const handleChange = (e) => {
        if (e.target.name === "first") {
            setFirstName(e.target.value)
        }
        if (e.target.name === "last") {
            setLastName(e.target.value)
        }
        if (e.target.name === "contact") {
            setMobile(e.target.value)
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
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            email: email
        }
        const editedData = {
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            email: email
        }

        if (handleAdd) {
            const addData = async () => {
                const token = {
                    headers: {
                        'x-auth': JSON.parse(localStorage.getItem("auth"))
                    }
                }
                try {
                    const result = await axios.post('http://localhost:3601/employee', newdata, token)
                    console.log(result.data)
                    // handleAdd(result.data)
                } catch (err) {
                    console.log(err)
                }
            }
            addData()
        }
        if (handleEditSave) {
            const editData = async () => {
                const token = {
                    headers: {
                        'x-auth': JSON.parse(localStorage.getItem("auth"))
                    }
                }
                try {
                    const result = await axios.put(`http://localhost:3601/employee/${customer.id}`, editedData, token)
                    handleEditSave(customer.id, editedData)
                } catch (err) {
                    console.log(err)
                }
            }
            editData()
            // handleEditSave(editedData)
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
                value={firstName}
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
                value={lastName}
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
                value={mobile}
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
