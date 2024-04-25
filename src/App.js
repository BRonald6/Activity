import ReactECharts from "echarts-for-react";
import "./styles.css";
function App() {
  const data = [
    { category: "Apples", value: 10 },
    { category: "Oranges", value: 20 },
    { category: "Bananas", value: 30 },
    { category: "Grapes", value: 25 },
    { category: "Pears", value: 15 },
  ];

  const options = {
    dataset: [
      {
        dimensions: ["name", "value"],
        source: [
          ["Apples", 10],
          ["Oranges", 20],
          ["Bananas", 30],
          ["Grapes", 25],
          ["Pears", 15],
        ],
      },
      {
        transform: {
          type: "sort",
          config: { dimension: "value", order: "desc" },
        },
      },
    ],
    xAxis: {
      type: "category",
      axisLabel: { interval: 0, rotate: 30 },
    },
    yAxis: {},
    series: {
      type: "bar",
      encode: { x: "name", y: "score" },
      datasetIndex: 1,
    },
  };

  return (
    <div className="vizContainer">
      <ReactECharts option={options} />;
    </div>
  );
}
export default App;
