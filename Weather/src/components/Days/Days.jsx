import "./Days.scss";
import Div from "../Div/Div";

const Days = () => {
  return (
    <section className="days flex w-full flex-row items-center justify-between gap-8">
        {DaysData.map((item, index) => (
          <Div key={index} className="day__item w-full">
            <p className="day__title">{item.title}</p>
          </Div>
        ))}
    </section>
  );
}

export default Days;

const DaysData = [
    /*{
        title: "Monday",

    },*/
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