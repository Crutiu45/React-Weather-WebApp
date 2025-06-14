import { useContext } from "react";
import WeatherContext from "../context/Weather.context";
import "../styles/components/Astronomy.scss";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Astronomy() {
  const { astronomy } = useContext(WeatherContext);

  if (!astronomy) return <div>Loading Astronomy...</div>;
  
  // Today's date in the matching format
  const today = new Date();
  const todayString = new Intl.DateTimeFormat(navigator.language, {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(today);

  return (
    <div className="Astronomy">
      <h2>Astronomy</h2>

      <HorizontallyScrollable className="widget-container">
        {astronomy.astro.data.map((item, index) => {
          // Format item's day in the SAME format for comparison
          const itemDate = new Date(item.day);
          const itemString = new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
          }).format(itemDate);

          return (
            <div key={index} className="widget">
              <div className="day">
                {itemString === todayString ? "Today" : itemString}
              </div>

              <div className="icon">
                {/* Optional icon representation for phases, etc.*/}
                <img src="your-phase-icon.png" alt="moon-phase" />
              </div>

              <div className="time">
                <div>Sunrise: {new Date(item.sun.rise).toLocaleTimeString()}</div>
                <div>Sunset: {new Date(item.sun.set).toLocaleTimeString()}</div>
                <div>Moonrise: {new Date(item.moon.rise).toLocaleTimeString()}</div>
                <div>Moonset: {new Date(item.moon.set).toLocaleTimeString()}</div>
              </div>
            </div>
          );
        })}
      </HorizontallyScrollable>
    </div>
  );
}

export default Astronomy;
