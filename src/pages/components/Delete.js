import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@material-ui/core'
import axios from 'axios'

function Delete(props) {

    const { ids, removeOpen, handleRemove, handleRemoveClose } = props

    const handleDelete = (id) => {
        const deleteData = async () => {
            const token = {
                headers: {
                    'x-auth': JSON.parse(localStorage.getItem("auth"))
                }
            }
            try {
                const result = await axios.delete(`http://localhost:3601/employee/${id}`, token)
                handleRemove(id)
            } catch (err) {
                console.log(err)
            }
        }
        deleteData()
    }

    return (
        <div>
            <Dialog open={removeOpen}>
                <DialogTitle>
                    Are you sure ?
                </DialogTitle>
                <DialogContent>
                    once deleted it cannot be retrieved.
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={() => handleDelete(ids)}>ok</Button>
                    <Button variant="contained" color="secondary" onClick={handleRemoveClose}>cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Delete
