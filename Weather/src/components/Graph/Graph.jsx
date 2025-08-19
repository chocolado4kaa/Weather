import "./Graph.scss";

const Graphs = () => {
  return (
    <section className="graphs">
      {graphData.map((item, index) => (
        <div key={index} className="graph__item container">
          <p>{item.title}</p>
        </div>
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
