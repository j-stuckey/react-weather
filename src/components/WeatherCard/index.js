import React from 'react';
import WeatherIcon from 'components/WeatherIcon';
import './WeatherCard.css';
import Moment from 'react-moment';

function WeatherCard(props) {
    const { time, temperatureHigh, temperatureLow, icon, precipProbability, precipType } = props.data;

    return (
        <div className="WeatherCard">
            <Moment format="ddd MMM D" unix>
                {time}
            </Moment>
            <WeatherIcon icon={icon} />
            <p>
                {Math.round(temperatureHigh)} º F / {Math.round(temperatureLow)}{' '}
                º F
            </p>
            <p>{Math.round(precipProbability * 100)} % {precipType}</p>
        </div>
    );
}

export default WeatherCard;
