import { getCurrentWeather } from "../api";

function CurrentWeather() {
  const data = getCurrentWeather();
  console.log(data);
  return (
    <div className="CurrentWeather"> </div>
  )
}

export default CurrentWeather