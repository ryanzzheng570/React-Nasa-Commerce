import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: 'linear-gradient(45deg, #3b53da 45%, #289cff, white)'
    }
}));


const Appbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6'>
                        NASA Astronomy Picture
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar
