import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["March", "April", "May", "June", "July", "August", "September"],
      datasets: [
        {
          label: "Confirmed Covid Cases",
          data: [10, 20, 30, 40, 50],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div classname="App">
      <h4 style={{ textAlign: "center" }}>COVID Chart By County</h4>
      <div style={{ height: "auto", width: "500px" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            // title: { text: "Covid-19 Test Test test", display: true },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
