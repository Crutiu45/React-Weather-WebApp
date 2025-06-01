import { Children, createContext, useEffect, useState }  from "react";
import {DEFAULT_PLACE} from "../utils";
import { getWeatherData } from "../api";

const WeatherContext = createContext();

function WeatherProvider({children }){
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [hourlyForecast,  setHourlyForecast] = useState([]);
    const [dailyForecast,  setDailyForecast] = useState([]);
    const [currentWeather,  setCurrentWeather] = useState({});

    useEffect(() => {
        async function _getWeatherData(){
            setLoading(true);

            const cw = await getWeatherData("current", place.place_id, 'auto');
            setCurrentWeather(cw.current);

            const hf = await getWeatherData("hourly", place.place_id, 'auto');
            setHourlyForecast(hf.hourly.data);

            const df = await getWeatherData("daily", place.place_id, 'auto');
            setDailyForecast(df.daily.data);

            setLoading(false);
        }
        _getWeatherData();
    }, [place]);

    return <WeatherContext.Provider value={{place, loading, currentWeather, hourlyForecast, dailyForecast,}}>
        {children}
    </WeatherContext.Provider>
}

export { WeatherProvider };
export default WeatherContext;