import "./Days.scss";
import { useWeather } from "../../hooks/useWeather.jsx";
import weatherIcons from "../../shared/const/Conditions.jsx";

const Days = () => {
  const { weather } = useWeather();

  const forecast =
    weather?.forecast.forecastday.slice(1, 7) || Array(6).fill(null);

  return (
    <section className="forecast">
      {forecast.map((day, index) => {
        const dateObj = new Date(day?.date);

        const getIcon = () => {
          const iconObj = weatherIcons.find(
            (w) => w.code === day?.day.condition.code
          );
          return iconObj?.dayicon;
        };

        const weekday = dateObj.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const monthDay = dateObj.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        });

        return (
          <div key={index} className="forecast-day container">
            <header className="forecast-day__header">
              <h3>{weekday}</h3>
              <p>{monthDay}</p>
            </header>
            <div className="forecast-day__content">
              <div className="forecast-day__icon">
                <img
                  src={getIcon()}
                  alt={day?.day.condition?.text}
                  className="condition_icon"
                />
              </div>
              <div className="forecast-day__temps">
                <p className="forecast-day__temp-max">{day?.day.maxtemp_c}°</p>
                <p className="forecast-day__temp-min">{day?.day.mintemp_c}°</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Days;
