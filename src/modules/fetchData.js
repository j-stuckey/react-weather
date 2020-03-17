import { GOOGLE_API_KEY, DARKSKY_API_KEY } from 'config';

export async function getLatAndLong(location) {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location},+NJ&key=${GOOGLE_API_KEY}`
    );

    const data = await response.json();

    return {
        address: data.results[0].formatted_address,
        lat: data.results[0].geometry.location.lat,
        long: data.results[0].geometry.location.lng
    };
}

function getDarkskyForecast(latitude, longitude) {

    fetch(`https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}`);
}
