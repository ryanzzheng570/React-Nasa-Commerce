import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles'
import Appbar from './AppBar/Appbar';
import { Grid } from '@material-ui/core'
import Images from './Image/Images';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey[100]
    },
    imageContainer: {
        paddingTop: theme.spacing(1),
    }
}));

const MainPage = () => {
    const classes = useStyles();
    const [imageJSONList, setImageJSON] = useState([]);

    const getImageJSONFromNASA = async (startDate, endDate) => {
        let nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
        let dataList = [];
        if (startDate && endDate) {
            const dateRange = `&start_date=${startDate.format('YYYY-MM-DD')}&end_date=${endDate.format('YYYY-MM-DD')}`;
            nasaAPI = nasaAPI.concat(dateRange);
            const { data } = await axios.get(nasaAPI);
            dataList = data;
        } else {
            const { data } = await axios.get(nasaAPI);
            dataList.push(data);
        }

        setImageJSON(dataList);
    }

    useEffect(() => {
        getImageJSONFromNASA(null, null);
    }, []);

    return (
        <div className={classes.root}>
            <Appbar />
            <Grid className={classes.imageContainer}>
                <Images images={imageJSONList} />
            </Grid>
        </div>
    )
}

export default MainPage
