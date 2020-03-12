import React from 'react';
import WeatherIcon from 'components/WeatherIcon';
import './WeatherCard.css';

function WeatherCard(props) {
    const { day, high, low, forecast } = props.data;

    return (
        <div className="WeatherCard">
            <p>{day}</p>
            <WeatherIcon icon={forecast} />
            <p>
                {high} º F / {low} º F
            </p>
        </div>
    );
}

export default WeatherCard;
