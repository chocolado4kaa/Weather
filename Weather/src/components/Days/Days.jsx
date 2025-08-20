import "./Days.scss";
import DaysData from "./../../shared/const/DaysData.jsx";

const Days = () => {
  return (
    <section className="days">
        {DaysData.map((item, index) => (
          <div key={index} className="day__item container">
            <p className="day__title">{item.title}</p>
          </div>
        ))}
    </section>
  );
}

export default Days;