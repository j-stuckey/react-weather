import { CLEAR, CLOUDY, RAIN, PARTLY_CLOUDY, WINDY } from 'utils/constants';
import { getRandomIntInclusive } from 'modules/numbers';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const forecasts = [CLEAR, CLOUDY, RAIN, PARTLY_CLOUDY, WINDY];

export const mockData = days.map((day, index) => {
    return {
        day,
        high: Math.round(getRandomIntInclusive(55, 70)),
        low: Math.round(getRandomIntInclusive(40, 49)),
        forecast: forecasts[Math.floor(Math.random() * forecasts.length)]
    };
});
