import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { WeatherCard, FlexContainer } from 'components';
import { changeFoo } from 'actions';
import { getWeatherData } from 'modules/fetchData.js';
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

    const weatherData = days.map((day, index) => {
        return {
            day,
            high: Math.round(getRandomIntInclusive(55, 70)),
            low: Math.round(getRandomIntInclusive(40, 49)),
            forecast: forecasts[Math.floor(Math.random() * forecasts.length)]
        };
    });

    const [text, setText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        // getWeatherData(searchTerm).then(data => {
        //     setData(data);
        // });
    }, [searchTerm]);

    const handleSubmit = e => {
        e.preventDefault();
        setSearchTerm(text);

        props.dispatch(changeFoo(searchTerm));

        // getWeatherData(searchTerm).then(response => {
        //     // console.log(response.results[0]);
        //     // console.log(response.results[0].geometry.location);
        //     setData(response);
        // });
        // setText('');
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    type="text"
                    name="searchTerm"
                    placeholder="Search here"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </form>
            <h1>{searchTerm}</h1>
            {data ? (
                <p>
                    {data.results[0].geometry.location.lat},
                    {data.results[0].geometry.location.lng}{' '}
                </p>
            ) : (
                ''
            )}
            <FlexContainer type="row">
                {weatherData.map((item, index) => (
                    <WeatherCard key={index} data={item} />
                ))}
            </FlexContainer>
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

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(App);
