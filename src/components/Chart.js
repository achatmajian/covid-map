import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

// const api = axios.create({
//   baseURL: `https://api.covidtracking.com/v1/states/current.json`,
// });

/* ======= Set up chart component ======= */
const Chart = () => {
  const [isLoading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [deaths, setDeaths] = useState({});
  const [date, setDate] = useState({});

  /* ======= Data & styling for chart in modal ======= */
  const chart = () => {

    axios.get("https://api.covidtracking.com/v1/states/daily.json")
      .then(res => {
        console.log(res)
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })

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

  // api.get("/").then((res) => {
  //   console.log(res.data);
  //   setLoading(false);
  // });

  return (
    <div classname="App">
      {isLoading ? "Loading..." : "Loaded!"}
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
