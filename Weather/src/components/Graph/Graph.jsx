import Div from "../Div/Div";
import "./Graph.scss";

const Graphs = () => {
  return (
    <section className="graphs flex w-full flex-row items-center justify-between gap-8">
      {graphData.map((item, index) => (
        <Div key={index} className="graph__item w-full">
          <p>{item.title}</p>
        </Div>
      ))}
    </section>
  );
};

export default Graphs;

const graphData = [
  {
    title: "UV Index",
  },
  {
    title: "Sunrise  and Sunset",
  },
  {
    title: "Humidity",
  },
];
