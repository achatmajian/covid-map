import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";

// const api = axios.create({
//   baseURL: `https://api.covidtracking.com/v1/states/current.json`,
// });

/* ======= Set up chart component ======= */
const Chart = () => {
    const [isLoading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({});
    const [deaths, setDeaths] = useState([]);
    const [date, setDate] = useState([]);

    /* ======= Data & styling for chart in modal ======= */
    const chart = () => {

        let matchedState = [];
        let covidDeaths = [];
        let timePassed = [];

        axios.get("https://api.covidtracking.com/v1/states/current.json")
            .then(res => {
                console.log(res);
                setLoading(false);
                const dataObj = res.data;
                // for ( )

                //Iterate through state id or abbrevation
                //Compare state from states.json to state in api
                //Push data from appropriate state into respective empty array

                {
                    matchedState.push(parseInt(dataObj.state))
                    covidDeaths.push(parseInt(dataObj.death))
                    timePassed.push(parseInt(dataObj.date))
                }
                setChartData({
                    labels: timePassed,
                    datasets: [
                        {
                            label: "COVID-19 Deaths",
                            data: covidDeaths,
                            backgroundColor: ["rgba(0, 153, 0, 0.6)"],
                            // borderColor: ["rgba(0, 153, 0, 0.6)"],
                            borderWidth: 1,
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
            {/* <h4 style={{ textAlign: "center" }}>COVID-19 By State</h4> */}
            <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "600" }}>{isLoading ? "Data Loading..." : "Data Loaded!"}</p>
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
