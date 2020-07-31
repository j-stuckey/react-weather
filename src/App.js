import React from 'react';
import { fetchWeatherData } from 'actions';
import { connect } from 'react-redux';
import { WeatherCard, FlexContainer } from 'components';
import './App.css';
import { Route } from 'react-router-dom';

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
                <p>{this.props.address}</p>
                <p>{this.props.currently.summary}</p>
                <FlexContainer type="row">

                </FlexContainer>
                <Route exact path="/chart" component={() => <h1>Chart</h1>} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    address: state.address,
    currently: state.currently
});

export default connect(mapStateToProps)(App);
