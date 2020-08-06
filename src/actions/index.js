import { API_BASE_URL } from 'config';
import normalizeResponseErrors from 'utils/normalizeResponseErrors';

export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST';
export const fetchWeatherDataRequest = () => ({
    type: FETCH_WEATHER_DATA_REQUEST
});

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = (payload) => ({
    type: FETCH_WEATHER_DATA_SUCCESS,
    payload
});

export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';
const fetchWeatherDataError = (err) => ({
    type: FETCH_WEATHER_DATA_ERROR,
    err
});

export const getForecast = (latitude, longitude) => (dispatch) => {
    dispatch(fetchWeatherDataRequest());

    fetch(
        `${API_BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
    )
        .then((res) => normalizeResponseErrors(res))
        .then((res) => dispatch(fetchWeatherDataSuccess(res)))
        .catch((err) => {
            dispatch(fetchWeatherDataError(err));
        });
};

export const fetchWeatherData = (location) => (dispatch, getState) => {
    dispatch(fetchWeatherDataRequest());

    fetch(`${API_BASE_URL}/weather?location=${location}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((res) => normalizeResponseErrors(res))
        .then((res) => dispatch(fetchWeatherDataSuccess(res)))
        .catch((err) => dispatch(fetchWeatherDataError(err)));
};
