import times from "../../shared/const/Times";

const ForecastTable = () => {
    
  const indicators = [
    { title: "Temp, °C", key: "temp" },
    { title: "Feels Like", key: "feels" },
    { title: "Pressure, kPa", key: "pressure" },
    { title: "Humidity, %", key: "humidity" },
    { title: "Wind, km/h", key: "wind" },
  ];

  return (
    <table className="forecast">
      <thead>
        <tr className="table__days">
          <th></th>
          <th colSpan="2">Night</th>
          <th colSpan="2">Morning</th>
          <th colSpan="2">Day</th>
          <th colSpan="2">Evening</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__times">
          <th></th>
          {times.map((t, index) => (
            <th key={index}>{t.time}</th>
          ))}
        </tr>
        {indicators.map((indicator) => (
          <tr className="table__indicators" key={indicator.key}>
            <td className="table__col-title">{indicator.title}</td>
            {times.map((t, index) => (
              <td key={index}>{t[indicator.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForecastTable;
