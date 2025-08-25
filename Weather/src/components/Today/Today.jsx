import ForecastTable from "./ForecastTable";
import "./Today.scss";
import { useWeather } from "../../hooks/useWeather";
import weatherIcons from "../../shared/const/Conditions";

const Today = () => {
  const { weather } = useWeather();

  const localtime = weather?.location.localtime;
  const date = new Date(localtime);
  const isDay = weather?.current.is_day;

  const iconObj = weatherIcons.find(
    (w) => w.code === weather?.current.condition.code
  );
  const icon = iconObj && (isDay ? iconObj.dayicon : iconObj.nighticon) ;

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <section className="today">
      <div className="today__container container">
        <header className="container__header">
          <h2 className="today__time">{formattedDate}</h2>
        </header>
        <div className="container__content content-box">
          <div className="temperature">
            <div className="temperature__icon">
              <img src={icon} alt={weather?.current.condition.text} />
            </div>
            <div className="temperature__value">{weather?.current.temp_c}°C</div>
          </div>
          <div className="weather">
            <ForecastTable weather={weather} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
