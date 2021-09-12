import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainPage = () => {
    const [imageJSON, setImageJSON] = useState({});

    const getImageJSONFromNASA = async () => {
        const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        setImageJSON(data);
    }

    useEffect(() => {
        getImageJSONFromNASA();
    }, []);

    return (
        <div>
            <span>{imageJSON.date}</span>
            <span>{imageJSON.explanation}</span>
            <span>{imageJSON.hdurl}</span>
            <span>{imageJSON.title}</span>
        </div>
    )
}

export default MainPage
