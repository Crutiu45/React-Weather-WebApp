import { useContext } from "react";
import WeatherContext from "../context/Weather.context";
import "../styles/components/Astronomy.scss";
import HorizontallyScrollable from "./HorizontallyScrollable";
import { getMoonPhaseIcon } from "../constants"

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
                <i className={`bi ${getMoonPhaseIcon(item.moon.phase)}`} title={item.moon.phase}></i>
                <div className="phase-label">{item.moon.phase.replace(/_/g, ' ')}</div>
              </div>



              <div className="time">
                <div><i className="bi bi-sunrise"></i> Sunrise: {new Date(item.sun.rise).toLocaleTimeString()}</div>
                <div><i className="bi bi-sunset"></i> Sunset: {new Date(item.sun.set).toLocaleTimeString()}</div>
                <div><i className="bi bi-moon"></i> Moonrise: {new Date(item.moon.rise).toLocaleTimeString()}</div>
                <div><i className="bi bi-moon-stars"></i> Moonset: {new Date(item.moon.set).toLocaleTimeString()}</div>
              </div>

            </div>
          );
        })}
      </HorizontallyScrollable>
    </div>
  );
}

export default Astronomy;
