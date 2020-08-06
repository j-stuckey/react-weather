import {
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR
} from 'actions';

const initialState = {
    isFetching: false,
    address: '',
    current: {},
    daily: {},
    hourly: {},
    error: ''
};

// defaults to five day forecast
function numberOfDays(forecast, daysNeeded = 5) {
    forecast.data = forecast.data.slice(0, daysNeeded);
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
        const { daily, hourly, currently, address, forecast } = action.payload;
        console.log(action.payload);
        return {
            ...state,
            isFetching: false,
            address: address,
            daily: numberOfDays(daily, 5),
            hourly,
            current: currently
        };
    }
    if (action.type === FETCH_WEATHER_DATA_ERROR) {
        return {
            ...state,
            isFetching: false,
            error: action.err.message
        };
    }
    return state;
};

export default rootReducer;
