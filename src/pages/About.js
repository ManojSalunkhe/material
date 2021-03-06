import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Drawers from '../react-hool-form/Drawers';

const useStyles = makeStyles({
    design: {
        width: "40%",
        margin: "auto",
        marginTop: 150,
        fontWeight: "bold"
    }
})

function About(props) {
    const classes = useStyles();

    return (
        <div className={classes.design}>
            <Drawers {...props} />
            <Typography >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                quisque non tellus. Convallis convallis tellus id interdum velit
                laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                faucibus et molestie ac.
            </Typography>
        </div>
    )
}

export default About
