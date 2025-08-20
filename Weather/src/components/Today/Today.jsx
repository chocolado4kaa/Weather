import ForecastTable from "./ForecastTable";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import "./Today.scss";

const Today = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedtime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <section className="today">
        <div className="today__container container">
          <div className="container__header">
            <h2 className="today__time">{formattedDate} {formattedtime}</h2>
          </div>
          <div className="container__content">
            <div className="temperature">
              <div className="temperature__icon"></div>
              <div className="temperature__value"></div>
            </div>
            <div className="weather">
              <ForecastTable />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Today;


