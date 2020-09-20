import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
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
        datasets: {
          label: "Confirmed Cases",
          data: [100, 150, 200, 250, 300, 350, 400, 450, 500],
          backgroundColor: ["rgba(255, 99, 132, 0.6)"],
        },
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar />
      </div>
    );
  }
}

export default Chart;
