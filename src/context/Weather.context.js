import { createContext, useEffect, useState } from 'react';
import {
  DEFAULT_PLACE,
  MEASUREMENT_SYSTEMS,
  UNITS,
} from '../constants';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );

  const [units, setUnits] = useState({});

  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : []; 
  });

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches)); 
  }, [recentSearches]);

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);
      try {
        // Currently
        const cw = await getWeatherData(
          'current',
          place.place_id,
          measurementSystem
        );
        setCurrentWeather(cw.current);
        setUnits(UNITS[cw.units]);

        // Hourly
        const hf = await getWeatherData(
          'hourly',
          place.place_id,
          measurementSystem
        );
        hf.hourly.data = hf.hourly.data;

        setHourlyForecast(hf.hourly.data);

        // Daily
        const df = await getWeatherData(
          'daily',
          place.place_id,
          measurementSystem
        );
        df.daily.data = df.daily.data;

        setDailyForecast(df.daily.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{ 
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
        recentSearches,
        setRecentSearches,
      }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
