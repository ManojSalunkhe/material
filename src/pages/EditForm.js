import React from 'react'
import DialogComp from './DialogComp'

function EditForm(props) {

    const { editOpen, customer, handleEditSave, handleEditClose } = props

    return (
        <div>
            <DialogComp open={editOpen} customer={customer} handleEditSave={handleEditSave} handleEditClose={handleEditClose} />
        </div>
    )
}

export default EditForm
