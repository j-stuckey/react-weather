import React from 'react';
import sunny from 'assets/Sunny.png';

function WeatherIcon(props) {
    if (props.icon === 'Clear') {
        return <img src={sunny} alt="sunny" />;
    }
    return <p>No image</p>;
}

export default WeatherIcon;
