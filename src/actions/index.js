import { API_BASE_URL } from 'config';

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
const fetchWeatherDataError = (error) => ({
    type: FETCH_WEATHER_DATA_ERROR,
    error
});

export const SET_ADDRESS = 'SET_ADDRESS';
export const setAddress = address => ({
    type: SET_ADDRESS,
    address
});

export const fetchWeatherData = location => (dispatch, getState) => {
    dispatch(fetchWeatherDataRequest());

    fetch(`${API_BASE_URL}/weather?location=${location}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => dispatch(fetchWeatherDataSuccess(res)))
        .catch(err => dispatch(fetchWeatherDataError(err)));
    // const addressInfo = await getAddressInfo(location);
    //
    // dispatch(setAddress(addressInfo.address));
    //
    // const forecast = getDarkskyForecast(addressInfo.lat, addressInfo.long);
};
