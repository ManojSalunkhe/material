import React from 'react'
import Form from './Form'
import { Dialog } from '@material-ui/core'

function DialogComp(props) {

    const { open, handleClose, handleAdd, customer, handleEditSave, handleEditClose } = props

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Form
                    handleAdd={handleAdd}
                    handleClose={handleClose}
                    customer={customer}
                    handleEditSave={handleEditSave}
                    handleEditClose={handleEditClose}
                />
            </Dialog>
        </div>
    )
}

export default DialogComp
