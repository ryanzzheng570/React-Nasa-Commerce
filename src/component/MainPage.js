import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const MainPage = () => {
    const [imageJSONList, setImageJSON] = useState([]);

    const getImageJSONFromNASA = async (startDate, endDate) => {
        let nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
        let dataList = [];
        if (startDate && endDate) {
            const dateRange = `&start_date=${startDate.format('YYYY-MM-DD')}&end_date=${endDate.format('YYYY-MM-DD')}`;

            nasaAPI = nasaAPI.concat(dateRange);
            debugger;
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
        <div>
            {imageJSONList.length > 0 && imageJSONList.map((imageJSON, index) => {
                return (
                    <div key={index}>
                        <span>{imageJSON.date}</span>
                        <span>{imageJSON.explanation}</span>
                        <span>{imageJSON.hdurl}</span>
                        <span>{imageJSON.title}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default MainPage
