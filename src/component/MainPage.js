import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@material-ui/core'
import Appbar from './AppBar/Appbar';
import {
    Grid,
    Collapse,
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core'
import Images from './Image/Images';

//Main Page styling
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey[100]
    },
    imageContainer: {
        paddingTop: theme.spacing(1),
    },
    search: {
        backgroundColor: 'white',
        height: 70
    },
    form: {
        paddingTop: theme.spacing(1)
    },
    date: {
        marginLeft: theme.spacing(3)
    },
    chebox: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(0.5)
    },
    btn: {
        marginLeft: theme.spacing(3),
        color: 'white',
        marginTop: theme.spacing(0.2)
    }
}));

//Main Page Hook
const MainPage = () => {
    const classes = useStyles();
    const [imageJSONList, setImageJSON] = useState([]);
    const [isDateSearch, setIsDateSearch] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [selectedEndDate, setSelectedEndDate] = useState(moment().format('YYYY-MM-DD'));
    const [isSpecificDate, setIsSpecificDate] = useState(false);

    //Function to retrieve image json from nasa API endpoint
    const getImageJSONFromNASA = async (startDate, endDate, isDateSpecific) => {
        let dataList = [];
        //Base URL for GET request
        let nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
        //Apply start date and end date if user specified start date and end date
        if (!isDateSpecific && startDate && endDate) {
            const dateRange = `&start_date=${startDate}&end_date=${endDate}`;
            nasaAPI = nasaAPI.concat(dateRange);
            const { data } = await axios.get(nasaAPI);
            dataList = data;
        }
        else {
            if (isDateSpecific && startDate) {
                nasaAPI = nasaAPI.concat(`&date=${startDate}`)
            }
            const { data } = await axios.get(nasaAPI);
            dataList.push(data);
        }

        //Set the list to rerender
        setImageJSON(dataList);
    }

    //Use effect hook
    useEffect(() => {
        getImageJSONFromNASA(null, null, false);
    }, []);

    //Handler to open date search section
    const handleDateSearch = () => {
        setIsDateSearch(!isDateSearch);
    }

    //Handler for start date 
    const handleStartDate = (e) => {
        setSelectedStartDate(e.target.value);
    }

    //Handler for end date
    const handleEndDate = (e) => {
        setSelectedEndDate(e.target.value);
    }

    //Handler for choosing image on a specific date
    const handleSpecificDateCheck = (e) => {
        setIsSpecificDate(e.target.checked);
    }

    //Submit handler for searching by date
    const onSearchByDate = (e) => {
        e.preventDefault();
        setIsDateSearch(!isDateSearch);
        getImageJSONFromNASA(selectedStartDate, selectedEndDate, isSpecificDate);
    }

    return (
        <div className={classes.root}>
            <Appbar handleDateSearch={handleDateSearch} />
            <Collapse elevation={4} in={isDateSearch}>
                <Paper className={classes.search}>
                    <form className={classes.form} onSubmit={onSearchByDate}>
                        <TextField
                            id='start_date'
                            label='Start Date'
                            type='date'
                            value={selectedStartDate}
                            className={classes.date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleStartDate}
                        />
                        <TextField
                            id='end_date'
                            label='End Date'
                            type='date'
                            value={selectedEndDate}
                            className={classes.date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled={isSpecificDate}
                            onChange={handleEndDate}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id='isSpecificDate'
                                    checked={isSpecificDate}
                                    onChange={handleSpecificDateCheck}
                                    color='primary'
                                />}
                            label="On a specific date?"
                            className={classes.chebox}
                        />
                        <Button
                            color='secondary'
                            variant='contained'
                            className={classes.btn}
                            type='submit'>
                            Search
                        </Button>
                    </form>
                </Paper>
            </Collapse>
            <Grid container justifyContent='center' className={classes.imageContainer}>
                <Images images={imageJSONList} />
            </Grid>
        </div>
    )
}

export default MainPage
