// dependencies
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import ChartPanel from "./ChartsPanel/ChartPanel";
import ViewersPanel from "./ViewersPanel/ViewersPanel";

// constants
import Constants from ".././Constants";

// css
import "../../css/charts.css";

const ChartComponent = () => {
  // initialize all the Constants
  const allConstants = Constants();

  // Initialize chart data and its modifier function
  const [chartData, setChartData] = useState({
    labels: allConstants.labels,
    data: allConstants.data,
    id: uuidv4(),
  });

  const updateViewersCount = (channelInfo) => {
    const labels = [];
    const data = [];

    channelInfo.forEach((ele) => {
      labels.push(ele.name);
      data.push(parseInt(ele.viewers));
    });

    setChartData({ ...chartData, labels, data, id: uuidv4() });
  };

  const { data, labels, id } = chartData;
  return (
    <div className="content-div">
      <ViewersPanel updateViewersCount={updateViewersCount} />
      <ChartPanel data={data} labels={labels} id={id} />
    </div>
  );
};

export default ChartComponent;
