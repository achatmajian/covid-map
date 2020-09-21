import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

/* ======= Set up chart component ======= */
const Chart = () => {
  const [chartData, setChartData] = useState({});

  /* ======= Data & styling for chart in modal ======= */
  const chart = () => {
    setChartData({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
      ],
      datasets: [
        {
          label: "Confirmed COVID-19 Infections",
          data: [0, 132, 266, 327, 1243, 4786, 6192, 3093, 1864],
          backgroundColor: ["rgba(0, 153, 0, 0.6)"],
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
      {/* <h4 style={{ textAlign: "center" }}>COVID Chart By County</h4> */}
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
