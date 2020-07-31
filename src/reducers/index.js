import {
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR
} from 'actions';

const initialState = {
    isFetching: false,
    address: '',
    currently: {},
    daily: {},
    hourly: {},
    error: ''
};

// defaults to five day forecast
function getDays(forecast, numberOfDays = 5) {
    forecast.data = forecast.data.slice(0, numberOfDays);
    return forecast;
}

const rootReducer = (state = initialState, action) => {
    if (action.type === FETCH_WEATHER_DATA_REQUEST) {
        return {
            ...state,
            isFetching: true
        };
    }
    if (action.type === FETCH_WEATHER_DATA_SUCCESS) {
        const { daily, hourly, currently, address } = action.payload;
        console.log(action.payload);

        return {
            ...state,
            isFetching: false,
            address: address,
            daily: getDays(daily),
            hourly,
            currently: currently
        };
    }
    if (action.type === FETCH_WEATHER_DATA_ERROR) {
        console.log(action.err);
        return {
            ...state,
            isFetching: false,
            error: action.err
        };
    }
    return state;
};

export default rootReducer;
