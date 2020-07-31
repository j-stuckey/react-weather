import React from 'react';
import WeatherIcon from 'components/WeatherIcon';
import './WeatherCard.css';
import Moment from 'react-moment';

function WeatherCard(props) {
    const { time, temperatureHigh, temperatureLow, icon } = props.data;

    return (
        <div className="WeatherCard">
            <Moment format="MMM D" withTitle unix>
                {time}
            </Moment>
            <WeatherIcon icon={icon} />
            <p>
                {Math.round(temperatureHigh)} º F / {Math.round(temperatureLow)}{' '}
                º F
            </p>
        </div>
    );
}

export default WeatherCard;
