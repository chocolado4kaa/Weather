import "./Days.scss";

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

const DaysData = [
    {
        title: "Tuesday",

    },
    {
        title: "Wednesday",

    },
    {
        title: "Thursday",

    },
    {
        title: "Friday",

    },
    {
        title: "Saturday",

    },
    {
        title: "Sunday",

    }
]