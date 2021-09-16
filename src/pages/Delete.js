import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@material-ui/core'

function Delete(props) {

    const { ids, removeOpen, handleRemove, handleRemoveClose } = props

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
                    <Button variant="contained" color="primary" onClick={() => handleRemove(ids)}>ok</Button>
                    <Button variant="contained" color="secondary" onClick={handleRemoveClose}>cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Delete
