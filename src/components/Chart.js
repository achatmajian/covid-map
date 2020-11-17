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

    let covidDeaths = [];
    let timePassed = [];

    axios.get("https://api.covidtracking.com/v1/states/daily.json")
      .then(res => {
        console.log(res);
        setLoading(false);
        for (const dataObj of res.data) {
          covidDeaths.push(parseInt(dataObj.death))
          timePassed.push(parseInt(dataObj.date))
        }
        setChartData({
          labels: timePassed,
          datasets: [
            {
              label: "Confirmed COVID-19 Infections",
              data: covidDeaths,
              backgroundColor: ["rgba(0, 153, 0, 0.6)"],
              borderWidth: 2,
            },
          ],
        });
      })
      .catch(err => {
        console.log(err)
      });
    console.log(covidDeaths, timePassed);


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
