import React, { useState } from "react";
import DialogComp from "../DialogComp";
import EditForm from "../EditForm";
import Delete from "../Delete";
import userTableColumns from "../../constants/user-table-columns";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    makeStyles,
    Paper,
    Avatar
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "auto",
        marginTop: "150px",
        width: "70%",

    },
    tableHeaders: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: theme.palette.primary.dark
    },
    avatar: {
        backgroundColor: theme.palette.warning.dark
    },
    button: {
        float: "right",
        marginBottom: 20
    },
    cursor: {
        cursor: "pointer"
    }
}))


function Customerslist(props) {

    const classes = useStyles()

    const [arr, setArr] = useState([
        { id: 1, firstName: "Rahul", lastName: "cool", contact: "9876543210", email: "rahul@gmail.com" },
        { id: 2, firstName: "Manish", lastName: "dwig", contact: "9876543210", email: "dwig@gmail.com" },
        { id: 3, firstName: "Mani kanta", lastName: "thammana", contact: "9876543210", email: "thammana@gmail.com" }
    ])

    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [removeOpen, setRemoveOpen] = useState(false)
    const [ids, setIds] = useState('')

    const [customer, setCustomer] = useState('')

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleEditClose = () => setEditOpen(false)

    const handleAdd = (data) => {
        setArr([...arr, data])
        handleClose()
    }

    const handleEdit = (id) => {
        const result = arr.find((ele) => {
            return ele.id === id
        })
        setCustomer(result)
        setEditOpen(true)
    }

    const handleEditSave = (data) => {
        const result = arr.map((ele) => {
            if (ele.email === data.email) {
                return { ...ele, ...data }
            } else {
                return { ...ele }
            }
        })

        setArr(result)
        handleEditClose()
    }

    const handleRemoveOpen = (id) => {
        setRemoveOpen(true)
        setIds(id)
    }

    const handleRemoveClose = () => setRemoveOpen(false)

    const handleRemove = (id) => {
        console.log('remove')
        const result = arr.filter((ele) => {
            return ele.id !== id
        })
        setArr(result)
        setRemoveOpen(false)
    }

    const handleSingleCustomerShow = (id) => {
        props.history.push(`/customer-list/${id}`)
    }

    return (
        <div className={classes.container}>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                <AddIcon /> Add customer
            </Button>
            <TableContainer
                component={Paper}
                style={{ border: "2px solid gray", borderRadius: "12px" }}
            >
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            {
                                userTableColumns.map((column, index) => (
                                    <TableCell key={index} className={classes.tableHeaders}>
                                        {column.columnText}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {
                            arr.map((ele) => {
                                return (
                                    <TableRow key={ele.id}>
                                        <TableCell className={classes.cursor} onClick={() => handleSingleCustomerShow(ele.id)}>
                                            <Avatar alt={ele.firstName} src="." className={classes.avatar} />
                                            <b>{ele.firstName}</b>
                                        </TableCell>
                                        <TableCell>{ele.lastName}</TableCell>
                                        <TableCell>{ele.contact}</TableCell>
                                        <TableCell>{ele.email}</TableCell>
                                        <TableCell className={classes.cursor} onClick={() => handleEdit(ele.id)}><EditIcon /></TableCell>
                                        <TableCell className={classes.cursor}><DeleteIcon onClick={() => handleRemoveOpen(ele.id)} /></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                open && (
                    <DialogComp
                        open={open}
                        handleClose={handleClose}
                        handleAdd={handleAdd}
                    />
                )
            }
            <EditForm
                editOpen={editOpen}
                customer={customer}
                handleEditSave={handleEditSave}
                handleEditClose={handleEditClose}
            />
            {
                removeOpen && (
                    <Delete
                        ids={ids}
                        removeOpen={removeOpen}
                        handleRemove={handleRemove}
                        handleRemoveClose={handleRemoveClose}
                    />
                )
            }
        </div >
    )

}

export default Customerslist