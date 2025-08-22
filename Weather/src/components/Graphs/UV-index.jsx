import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import UvLabels from "../../shared/const/UvLabels";

ChartJS.register(ArcElement, Tooltip);

const UvGauge = ({ uv }) => {
  const maxUv = 12;
  const data = {
    datasets: [
      {
        data: [uv, maxUv - uv],
        backgroundColor: ["#fcb045", "rgba(255, 255, 255, 0)"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="graph container">
      <header className="graph__header">
        <h3>UV Index</h3>
        <h3>{uv?.toFixed(2)} UV</h3>
      </header>
      <div className="graph__content">
        <Doughnut data={data} options={options} className="graph__canvas" />
        <div className="labels">
          {UvLabels.map((label, index) => (
            <p key={index}>{label.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UvGauge;
