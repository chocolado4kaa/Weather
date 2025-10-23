import "./Graph.scss";
import { useWeather } from "../../hooks/useWeather.jsx";
import UvGauge from "./UV-index.jsx";
import SunRise from "./Sunrise.jsx";
import Humidity from "./Humidity.jsx";
import { useState } from "react";

const Graphs = () => {
  const { weather } = useWeather();
  const uv = weather?.current.uv ?? 0;
  const sunData = {
    sunrise: weather?.forecast.forecastday?.[0].astro.sunrise,
    sunset: weather?.forecast.forecastday?.[0].astro.sunset,
    localtime: weather?.location.localtime ?? 0,
  };
  const hours = weather?.forecast.forecastday?.[0].hour;

  const [activeIndex, setActiveIndex] = useState(0);

  const graphs = [
    <UvGauge uv={uv} key="uv" />,
    <SunRise hours={sunData} key="sun" />,
    <Humidity dataset={hours} key="humidity" />,
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % graphs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? graphs.length - 1 : prev - 1));
  };

  return (
    <section className="graphs">
      <div className="graphs__change-button container">
        <button onClick={handlePrev}>↑</button>
        <div className="indicators">
          {graphs.map((_, i) => (
            <span key={i} className={i === activeIndex ? "active" : ""} />
          ))}
        </div>
        <button onClick={handleNext}>↓</button>
      </div>
      {graphs.map((graph, i) => (
        <div
          key={i}
          className={`graph container  ${i === activeIndex ? "visible" : "hidden"}`}
        >
          {graph}
        </div>
      ))}
    </section>
  );
};

export default Graphs;
