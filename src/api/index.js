import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) 
{
    const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
        place_id,
        language: 'en',
        units: measurementSystem,
    },
    headers: {
        'x-rapidapi-key': '4171bdec87msh019ac1f6e1defecp1cbcc7jsn0f2ea521619b',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

