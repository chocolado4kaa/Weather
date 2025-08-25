import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import hours from "../../shared/const/Hours";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const Humidity = ({ dataset }) => {
  const humidityData = dataset?.map((item) => item.humidity) || [];

  const currentHumidity =
    dataset && dataset.length > 0
      ? Math.round(
          dataset.reduce((sum, item) => sum + item.humidity, 0) / dataset.length
        )
      : null;

  const data = {
    labels: dataset?.map((_, index) => index) || [],
    datasets: [
      {
        data: humidityData,
        fill: true,
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(95, 138, 255, 0.4)");
          gradient.addColorStop(1, "rgba(95, 138, 255, 0)");
          return gradient;
        },
        borderColor: "#686868",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    scales: {
      x: {
        display: true,
        ticks: { display: false },
        grid: { display: false },
      },
      y: {
        display: false,
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="graph container">
      <header className="graph__header">
        <h3>Humidity</h3>
        <h3>{currentHumidity}%</h3>
      </header>
      <div className="graph__content">
        <Line data={data} options={options} className="graph__canvas" />
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
