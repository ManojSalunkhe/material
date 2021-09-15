import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        padding: 20,
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

    const { handleAdd, handleClose } = props

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

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

    const handleSubmit = () => {
        const data = {
            firstName: fName,
            lastName: lName,
            contact: contact,
            email: email
        }

        handleAdd(data)
    }
    return (
        <div className={classes.container}>
            <h1 style={{ textAlign: "center" }}>Add Form</h1>
            <TextField className={classes.fields} variant="outlined" label="first name" required fullWidth value={fName} name="first" onChange={(e) => handleChange(e)}></TextField>
            <TextField className={classes.fields} variant="outlined" label="last name" required fullWidth value={lName} name="last" onChange={(e) => handleChange(e)}></TextField>
            <TextField className={classes.fields} variant="outlined" placeholder="number" required fullWidth type="number" value={contact} name="contact" onChange={(e) => handleChange(e)}></TextField>
            <TextField className={classes.fields} variant="outlined" label="email" required fullWidth type="email" value={email} name="email" onChange={(e) => handleChange(e)}></TextField>
            <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}  >save</Button>
            <Button className={classes.button} variant="contained" color="secondary" onClick={handleClose}  >cancel</Button>
        </div>
    )
}

export default Form
