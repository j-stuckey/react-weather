import { GOOGLE_API_KEY, DARKSKY_API_KEY } from 'config';

export async function getWeatherData(location) {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location},+NJ&key=${GOOGLE_API_KEY}`
    );

    const data = await response.json();

    return data;
}

function getDarkskyForecast(latitude, longitude) {

    fetch(`https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}`);
}
