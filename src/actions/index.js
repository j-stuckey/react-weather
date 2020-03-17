import { getLatAndLong } from 'modules/fetchData';
import { DARKSKY_API_KEY } from 'config';

export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST';
export const fetchWeatherDataRequest = () => ({
    type: FETCH_WEATHER_DATA_REQUEST
});

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = () => ({
    type: FETCH_WEATHER_DATA_SUCCESS
});

export const fetchWeatherData = location => async (dispatch, getState) => {
    dispatch(fetchWeatherDataRequest());

    const latAndLong = await getLatAndLong(location);
};

function getDarkskyForecast(latitude, longitude) {
    fetch(
        `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}`
    );
}
