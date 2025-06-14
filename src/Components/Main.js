import '../styles/components/Main.scss';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useContext } from 'react';
import WeatherContext from '../context/Weather.context';
import Loader from "./Loader";
import Astronomy from "./AstronomyWidget";

function Main() {
  const { loading, currentWeather, dailyForecast, hourlyForecast, astronomy } = useContext(WeatherContext);
  
  return (
    <div className="Main">
      {loading ? 
        <Loader /> 
        :
        <>
          <CurrentWeather data={currentWeather} />

           {/* Astronomy Section */}
          {astronomy && <Astronomy />}

          <Forecast  
            type='hourly' 
            title='HOURLY FORECAST' 
            data={hourlyForecast} 
          />

          <Forecast 
            type='daily' 
            title='21 DAYS FORECAST' 
            data={dailyForecast} 
          />
        </>
      }
    </div>
  )
}

export default Main;
