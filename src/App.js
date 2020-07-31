import React from 'react';
import { fetchWeatherData } from 'actions';
import { connect } from 'react-redux';
import { WeatherCard } from 'components';
import './App.css';
import { Route } from 'react-router-dom';

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
                {this.props.isFetching ? <p>Loading...</p> : null}
                <h3>{this.props.address}</h3>

                {this.props.address && <h4>{this.props.currently.summary}</h4>}

                <Route exact path="/chart" component={() => <h1>Chart</h1>} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    address: state.address,
    currently: state.currently
});

export default connect(mapStateToProps)(App);
