import React from 'react';
import sunny from 'assets/Sunny.png';
import cloudy from 'assets/Cloudy.png';
import partlyCloudy from 'assets/PartlyCloudy.png';
import windy from 'assets/Windy.png';
import rain from 'assets/Rain.png';
import { CLEAR, CLOUDY, PARTLY_CLOUDY, RAIN, WINDY } from 'utils/constants';

function WeatherIcon(props) {
    if (props.icon === CLEAR) {
        return <img src={sunny} alt="sunny" />;
    } else if (props.icon === CLOUDY) {
        return <img src={cloudy} alt="cloudy" />;
    } else if (props.icon === PARTLY_CLOUDY) {
        return <img src={partlyCloudy} alt="partly cloudy" />;
    } else if (props.icon === RAIN) {
        return <img src={rain} alt="rain" />;
    } else if (props.icon === WINDY) {
        return <img src={windy} alt="windy" />;
    }
    return <p>No image</p>;
}

export default WeatherIcon;
