import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Cofirmed Covid Cases",
          data: [100, 200, 300, 400, 500],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div classname="App">
      <h2>COVID Chart</h2>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
