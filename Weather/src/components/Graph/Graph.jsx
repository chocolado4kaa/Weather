import "./Graph.scss";
import grapsData from "./../../shared/const/GraphsData.jsx";

const Graphs = () => {
  return (
    <section className="graphs">
      {grapsData.map((item, index) => (
        <div key={index} className="graph__item container">
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Graphs;
