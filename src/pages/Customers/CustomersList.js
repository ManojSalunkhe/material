import React, { useState, useEffect } from "react";
import DialogComp from "../components/DialogComp";
import EditForm from "../components/EditForm";
import Delete from '../components/Delete';
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
    Avatar,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import Drawers from "../../react-hool-form/Drawers";
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: 300,
        marginTop: 10,
        marginBottom: 40,
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
        marginBottom: 10
    },
    cursor: {
        cursor: "pointer"
    }
}))


function Customerslist(props) {

    const classes = useStyles();

    const [arr, setArr] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [removeOpen, setRemoveOpen] = useState(false)
    const [ids, setIds] = useState('')

    const [customer, setCustomer] = useState('')
    const [paginationCount, setPaginationCount] = useState(0)


    const handleChangePage = (event, newPage) => {
        console.log(newPage)
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const apiCall = async () => {
            const token = {
                headers: {
                    'x-auth': JSON.parse(localStorage.getItem("auth"))
                }
            }
            const result = await axios.get(`http://localhost:3601/employees?page=${page}&size=${rowsPerPage}`, token)
            setPaginationCount(result.data.count)
            setArr(result.data.rows)
        }
        apiCall()
    }, [page, rowsPerPage])



    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleEditClose = () => setEditOpen(false)

    const handleAdd = (data) => {
        // console.log(data)
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

    const handleEditSave = (id, data) => {
        const result = arr.map((ele) => {
            if (ele.id === id) {
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
            <Drawers {...props} />
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                <AddIcon /> Add customer
            </Button><br />
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
                            arr.length > 0 && arr.map((ele) => {
                                return (
                                    <TableRow key={ele.id}>
                                        <TableCell className={classes.cursor} onClick={() => handleSingleCustomerShow(ele.id)}>
                                            <Avatar alt={ele.firstName} src="." className={classes.avatar} />
                                        </TableCell>
                                        <TableCell>{ele.firstName}</TableCell>
                                        <TableCell>{ele.lastName}</TableCell>
                                        <TableCell>{ele.email}</TableCell>
                                        <TableCell>{ele.mobile}</TableCell>
                                        <TableCell className={classes.cursor} onClick={() => handleEdit(ele.id)}><EditIcon /></TableCell>
                                        <TableCell className={classes.cursor}><DeleteIcon onClick={() => handleRemoveOpen(ele.id)} /></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        {/* <Pagination count={11} defaultPage={6} siblingCount={0} /> */}
                        {
                            arr.length > 0 && <TablePagination
                                rowsPerPageOptions={[2, 5, 10]}
                                count={paginationCount}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        }
                    </TableFooter>
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