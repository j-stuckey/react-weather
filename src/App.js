import React from 'react';
import { fetchWeatherData, getForecast } from 'actions';
import { connect } from 'react-redux';
import { WeatherCard } from 'components';
import './App.css';
import { Route } from 'react-router-dom';

import Moment from 'react-moment';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(fetchWeatherData(this.state.searchTerm));
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            this.props.dispatch(getForecast(latitude, longitude));
        });
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="search-input"
                        autoComplete="off"
                        type="text"
                        name="searchTerm"
                        placeholder="Search City or Zip Code"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </form>
                {this.props.error && <p>{this.props.error}</p>}
                {this.props.isFetching ? (
                    <h1>Loading...</h1>
                ) : (
                    <React.Fragment>
                        <h3>{this.props.address}</h3>

                        {this.props.address && (
                            <div>
                                <h4>{this.props.daily.data[0].summary}</h4>
                                <h5>
                                    <Moment format="ddd MMM D HH:mm" unix>
                                        {new Date(this.props.current.time)}
                                    </Moment>
                                </h5>
                            </div>
                        )}

                        {this.props.current.time && (
                            <div className="weather-cards">
                                {this.props.daily.data.map((day) => {
                                    return (
                                        <WeatherCard
                                            key={day.time}
                                            data={day}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </React.Fragment>
                )}

                <Route exact path="/chart" component={() => <h1>Chart</h1>} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        address: state.address,
        current: state.current,
        daily: state.daily,
        error: state.error
    };
};

export default connect(mapStateToProps)(App);
