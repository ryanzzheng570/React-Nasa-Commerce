import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: 'linear-gradient(45deg, #3b53da 45%, #289cff, white)'
    },
    search: {
        marginLeft: 'auto',
        color: theme.palette.primary.main
    }
}));

//App Bar Hook
const Appbar = ({ handleDateSearch }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6'>
                        NASA Astronomy Picture Of The Day
                    </Typography>
                    <IconButton onClick={handleDateSearch} className={classes.search} aria-label="search" color="inherit">
                        <SearchIcon fontSize='medium' />
                        <Typography>Search by Date</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar
