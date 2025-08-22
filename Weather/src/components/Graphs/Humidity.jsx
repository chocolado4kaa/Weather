import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import hours from "../../shared/const/Hours";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Humidity = ({ dataset }) => {
  const humidityData = dataset?.map((item) => item.humidity) || [];

  const data = {
    labels: humidityData,
    datasets: [
      {
        data: humidityData,
        fill: true,
        borderColor: "#ffffffff",
        backgroundColor: "#000",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="graph container">
      <header className="graph__header">
        <h3>Humidity</h3>
        <h3>{}%</h3>
      </header>
      <div className="graph__content">
        <Line data={data} options={options} type="line" />
        <div className="labels">
          {hours.map((hour, index) => (
            <p key={index}>{hour.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Humidity;
