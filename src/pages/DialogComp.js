import React from 'react'
import Form from './Form'
import { Dialog } from '@material-ui/core'

function DialogComp(props) {

    const { open, handleClose, handleAdd } = props

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <Form handleAdd={handleAdd} handleClose={handleClose} />
            </Dialog>
        </div>
    )
}

export default DialogComp
