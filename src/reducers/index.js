import {
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS
} from 'actions';

const initialState = {
    isFetching: false
};

const rootReducer = (state = initialState, action) => {
    if (action.type === FETCH_WEATHER_DATA_REQUEST) {
        return {
            ...state,
            isFetching: true
        };
    }
    if (action.type === FETCH_WEATHER_DATA_SUCCESS) {
        return {
            ...state,
            isFetching: false
        };
    }
    return state;
};

export default rootReducer;
