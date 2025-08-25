import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const SunRise = ({ hours }) => {
  const to24Hour = (time) => {
    const date = new Date(`1970-01-01 ${time}`);
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const localTime = () => {
    const date = new Date(hours.localtime);
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const sunRise = convertToMinutes(to24Hour(hours.sunrise));
  const sunSet = convertToMinutes(to24Hour(hours.sunset));
  const currentTime = convertToMinutes(localTime());

  const data = {
    datasets: [
      {
        data: [currentTime - sunRise, 20, sunSet - currentTime],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "#fcb045",
          "rgba(255,255,255,0)",
        ],
        borderWidth: [1,25, 1],
        borderColor: ["#686868", "#fcb045", "#686868"],
        cutout: "99.9%",
        borderRadius: [0,1, 0],
        borderDash: [5, 15],
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
        <h3>Sunrise and Sunset </h3>
      </header>
      <div className="graph__content">
        <Doughnut data={data} options={options} className="graph__canvas" />
        <div className="labels">
          <div className="label">
            <p className="yellow">Sunrise</p>
            <p>{to24Hour(hours.sunrise)}</p>
          </div>
          <div className="label">
            <p className="yellow">SunSet</p>
            <p>{to24Hour(hours.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunRise;
