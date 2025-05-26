import { getCurrentWeather } from "../api";

function CurrentWeather() {
  const data = getCurrentWeather();
  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind,
  } = data;
  console.log("icon_num:", icon_num);
  return (
    <div className="CurrentWeather"> 
      <div className="temperature">
        <div className="weather-icon">
          <img 
            src= {`${process.env.PUBLIC_URL}/dist/weather_icons/weather_icons/set01/big/${icon_num}.png`}
            alt="Summary"
          />
        </div>
      </div>
      <div className="other-infos"></div>
    </div>
  )
}

export default CurrentWeather