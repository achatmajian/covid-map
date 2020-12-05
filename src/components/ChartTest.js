import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = () => {
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    const chart = () => {
        let empSal = [];
        let empAge = [];
        axios
            .get("https://api.covidtracking.com/v1/states/ny/current.json")
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    empSal.push(parseInt(dataObj.data.death));
                    empAge.push(parseInt(dataObj.data.date));
                }
                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: "level of thiccness",
                            data: empSal,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
        console.log(empSal, empAge);
    };

    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="App">
            <h1>Dankmemes</h1>
            <div>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Dankmemes;
