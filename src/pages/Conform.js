import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
    dialogTitle: {
        textAlign: "center",
        fontWeight: "bold"
    }
})

function Conform(props) {

    const { conformOpen, handleConformation, customer } = props

    const classes = useStyles()

    return (
        <div>
            <Dialog
                open={conformOpen}
            >
                <DialogTitle className={classes.dialogTitle}>
                    Are you sure ?
                </DialogTitle>
                <DialogContent>
                    {customer ? "changes cannot be retrieved." : "your data will be saved."}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleConformation("accept")}
                    >ok
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleConformation("decline")}
                    >cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Conform
