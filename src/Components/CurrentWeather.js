import { getCurrentWeather } from "../api";

function CurrentWeather() {
  const data = getCurrentWeather();
  return (
    <div className="CurrentWeather"> </div>
  )
}

export default CurrentWeather