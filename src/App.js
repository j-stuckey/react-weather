import React from 'react';
import { getWeatherData, fetchWeatherData } from 'actions';
import { connect } from 'react-redux';
import { WeatherCard, FlexContainer } from 'components';
import './App.css';
import { CLEAR, CLOUDY, RAIN, PARTLY_CLOUDY, WINDY } from 'utils/constants';
import { getRandomIntInclusive } from 'modules/numbers';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispatch(fetchWeatherData(this.state.searchTerm));
    };

    render() {
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
                forecast:
                    forecasts[Math.floor(Math.random() * forecasts.length)]
            };
        });

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input
                        autoComplete="off"
                        type="text"
                        name="searchTerm"
                        placeholder="Search here"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </form>
                {this.props.isFetching ? <h1>Loading...</h1> : null}
                {this.props.data ? (
                    <p>
                        {this.props.data.results[0].geometry.location.lat},
                        {this.props.data.results[0].geometry.location.lng}{' '}
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

const mapStateToProps = state => ({
    isFetching: state.isFetching
});

export default connect(mapStateToProps)(App);
