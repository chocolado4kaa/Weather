import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import UseDate from "../../hooks/useDate";

ChartJS.register(ArcElement, Tooltip);

const SunRise = ({ hours }) => {
  const localTimeString = new Date(hours.localtime);
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const to24Hour = (time) => {
    return UseDate.to24Hour(time);
  }

  const sunRise = convertToMinutes(to24Hour(hours.sunrise));
  const sunSet = convertToMinutes(to24Hour(hours.sunset));
  const currentTime = convertToMinutes(UseDate.localTime(localTimeString));

  const data = {
    datasets: [
      {
        data: [currentTime - sunRise, 5, sunSet - currentTime],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "#fcb045",
          "rgba(255,255,255,0)",
        ],
        borderWidth: [1, 5, 1],
        borderColor: ["#686868", "#fcb045", "#686868"],
        cutout: "99.5%",
        borderRadius: [0, 1, 0],
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <>
      <header className="graph__header">
        <h3>Sunrise and Sunset </h3>
      </header>
      <div className="graph__content content-box">
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
    </>
  );
};

export default SunRise;
