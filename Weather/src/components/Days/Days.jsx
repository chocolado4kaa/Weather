import "./Days.scss";
import { useWeather } from "../../hooks/useWeather.jsx";
import weatherIcons from "../../shared/const/Conditions.jsx";
import UseDate from "../../hooks/useDate.jsx";

const Days = () => {
  const { weather } = useWeather();

  const forecast =
    weather?.forecast.forecastday.slice(1, 7) || Array(6).fill(null);

  const getIcon = (code) => {
    const iconObj = weatherIcons.find((w) => w.code === code);
    return iconObj?.dayicon;
  };

  const renderDaysBlock = (day, index) => {
    const { weekday, monthDay } = UseDate.getFormattedDate(day?.date);
    return (
      <div key={index} className="forecast-day container">
        {!day ? (
          <></>
        ) : (
          <>
            <header className="forecast-day__header">
              <h3>{weekday}</h3>
              <p>{monthDay}</p>
            </header>
            <div className="forecast-day__content">
              <div className="forecast-day__icon">
                <img
                  src={getIcon(day?.day.condition.code)}
                  alt={day?.day.condition?.text}
                  className="condition_icon"
                />
              </div>
              <div className="forecast-day__temps">
                <p className="forecast-day__temp-max">{day?.day.maxtemp_c}°</p>
                <p className="forecast-day__temp-min">{day?.day.mintemp_c}°</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section className="forecast">
      {forecast.map((day, index) => renderDaysBlock(day, index))}
    </section>
  );
};

export default Days;
