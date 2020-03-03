import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
    const [data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=miI40eqMuxQHfzdZnREccFeTZflbRiOwARDCDhwI&date=2012-03-25')
        .then(response => setData(response.data))
    }, [])

    console.log(data)
    return (
        <div className = 'wrapper'>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <img alt={data.title} src={data.url}/>
            <h3>{data.copyright}</h3>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Card