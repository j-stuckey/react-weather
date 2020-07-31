import {
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
    SET_ADDRESS
} from 'actions';

const initialState = {
    isFetching: false,
    address: '',
    currently: {},
    daily: {},
    hourly: {}
};

const rootReducer = (state = initialState, action) => {
    if (action.type === FETCH_WEATHER_DATA_REQUEST) {
        return {
            ...state,
            isFetching: true
        };
    }
    if (action.type === FETCH_WEATHER_DATA_SUCCESS) {

        console.log(action.payload);
        const { daily, hourly, currently, address } = action.payload;
        return {
            ...state,
            isFetching: false,
            address: address,
            daily: daily,
            hourly,
            currently: currently
        };
    }

    if (action.type === SET_ADDRESS) {
        return {
            ...state,
            isFetching: false,
            address: action.address
        };
    }
    return state;
};

export default rootReducer;
