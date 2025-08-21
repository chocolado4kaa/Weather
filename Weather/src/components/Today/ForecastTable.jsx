import hours from "../../shared/const/Hours";
import indicators from "../../shared/const/Indicators";
import DayTimes from "../../shared/const/DayTimes";
import weatherIcons from "../../shared/const/Conditions";

const ForecastTable = ({ weather }) => {
  const selectedHours = weather?.forecast?.forecastday?.[0]?.hour.filter((h) =>
    hours.some((hour) => hour.time === h.time.slice(-5))
  );

  const getIcon = (hour) => {
    const iconObj = weatherIcons.find((w) => w.code === hour.condition.code);
    return iconObj ?? hour.is_day ? iconObj.dayicon : iconObj.nighticon;
  };

  return (
    <table className="todays-forecast__table">
      <thead>
        <tr className="table__dayTimes">
          <td rowSpan="2"></td>
          {DayTimes.map((dayTime, index) => (
            <th colSpan="2" key={index}>
              {dayTime.title}
            </th>
          ))}
        </tr>
        <tr className="table__hours">
          {hours.map((t, index) => (
            <th key={index}>{t.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {indicators.map((indicator) => (
          <tr className="table__indicators" key={indicator.key}>
            <td className="table__col-title">{indicator.title}</td>
            {selectedHours?.map((hour, index) => (
              <td key={index}>
                {indicator.key === "condition" ? (
                  <img
                    src={getIcon(hour)}
                    alt={hour.condition.text}
                    className="condition_icon"
                  />
                ) : indicator.key === "pressure_mb" ? (
                  (hour[indicator.key] / 10).toFixed(1)
                ) : (
                  hour[indicator.key] ?? "-"
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForecastTable;
