import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import UvLabels from "../../shared/const/UvLabels";

ChartJS.register(ArcElement, Tooltip);

const UvGauge = ({ uv }) => {
  const maxUv = 12;
  const getGradient = (ctx, chartArea, uv, maxUv) => {
    const { left, right } = chartArea;
    const width = right - left;

    const uvWidth = width * (uv / maxUv);

    const gradient = ctx.createLinearGradient(
      left - 10,
      10,
      left + uvWidth,
      -20
    );
    gradient.addColorStop(0, "#fcb045");
    gradient.addColorStop(0.65, "rgba(255, 255, 255, 0)");
    return gradient;
  };

  const data = {
    datasets: [
      {
        data: [uv, maxUv - uv],
        borderWidth: 0,
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return;
          return context.dataIndex === 0
            ? getGradient(ctx, chartArea, uv, maxUv)
            : "rgba(255,255,255,0)";
        },
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
    <>
      <header className="graph__header">
        <h3>UV Index</h3>
        <h3>{uv?.toFixed(2)} UV</h3>
      </header>
      <div className="graph__content content-box">
        <Doughnut data={data} options={options} className="graph__canvas" />
        <div className="labels">
          {UvLabels.map((label, index) => (
            <p key={index}>{label.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default UvGauge;
