import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { WeatherCard } from 'components';
import './App.css';

function App(props) {
    const data = [
        { day: 'Monday', high: 62, low: 42, forecast: 'Clear' },
        { day: 'Tuesday', high: 50, low: 39, forecast: 'Cloudy' },
        { day: 'Wednesday', high: 65, low: 33, forecast: 'Rain' },
        { day: 'Thursday', high: 53, low: 50, forecast: 'Partly Cloudy' },
        { day: 'Friday', high: 70, low: 60, forecast: 'Clear' },
        { day: 'Saturday', high: 50, low: 39, forecast: 'Windy' },
        { day: 'Sunday', high: 65, low: 33, forecast: 'Rain' }
    ];

    const [city, setCity] = useState('Jersey City, NJ');
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setCity(value);
        setValue('');
    }

    return (
        <div className="App">
            {/*<form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>*/}

            {data.map((item, index) => (
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
