import hours from "../../shared/const/Hours";
import indicators from "../../shared/const/Indicators";
import DayTimes from "../../shared/const/DayTimes";

const ForecastTable = () => {
  return (
    <table className="forecast">
      <thead>
        <tr className="table__dayTimes">
          <th rowSpan="3"></th>
          {DayTimes.map((dayTime, index) => (
            <th colSpan="2" key={index}>
              {dayTime.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="table__icons"></tr>
        <tr className="table__hours">
          {hours.map((t, index) => (
            <th key={index}>{t.time}</th>
          ))}
        </tr>
        {indicators.map((indicator) => (
          <tr className="table__indicators" key={indicator.key}>
            <td className="table__col-title">{indicator.title}</td>
            {hours.map((t, index) => (
              <td key={index}>{t[indicator.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForecastTable;
