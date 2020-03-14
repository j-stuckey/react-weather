import React from 'react';
import { WeatherCard } from 'components';
import './App.css';
import { CLEAR, CLOUDY, RAIN, PARTLY_CLOUDY, WINDY } from 'utils/constants';
import { getRandomIntInclusive } from 'modules/numbers';

function App(props) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    const forecasts = [CLEAR, CLOUDY, RAIN, PARTLY_CLOUDY, WINDY];

    const weatherData = days.map(day => {
        return {
            day,
            high: Math.round(getRandomIntInclusive(55, 70)),
            low: Math.round(getRandomIntInclusive(40, 49)),
            forecast: forecasts[Math.floor(Math.random() * forecasts.length)]
        };
    });

    return (
        <div className="App">
            {weatherData.map((item, index) => (
                <WeatherCard key={index} data={item} />
            ))}
        </div>
    );
}

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default App;
