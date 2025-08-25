import "./Graph.scss";
import { useWeather } from "../../hooks/useWeather.jsx";
import UvGauge from "./UV-index.jsx";
import SunRise from "./Sunrise.jsx";
import Humidity from "./Humidity.jsx";

const Graphs = () => {
  const { weather } = useWeather();
  const uv = weather?.current.uv ?? 0;
  const sunData = {
    sunrise: weather?.forecast.forecastday?.[0].astro.sunrise,
    sunset: weather?.forecast.forecastday?.[0].astro.sunset,
    localtime: weather?.location.localtime ?? 0,
  };
  const hours = weather?.forecast.forecastday?.[0].hour;
  return (
    <section className="graphs">
      <UvGauge uv={uv} />
      <SunRise hours={sunData} />
      <Humidity dataset={hours}/>
    </section>
  );
};

export default Graphs;
