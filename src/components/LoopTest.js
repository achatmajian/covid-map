import React from "react";
import ToggleButtons from "./ToggleButtons.js";
import "./LoopTestStyles.css";


export default class LoopTest extends React.Component {

    state = {
        loading: true,
        usaState: null,
    };

    async componentDidMount() {
        const url = "https://api.covidtracking.com/v1/states/current.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ usaState: data[37], loading: false })
        // console.log(data.results[0]);
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        if (!this.state.usaState) {
            return <div>Data Loaded!</div>;
        }

        return (
            <div>

                {/* <div className="data-title"><strong>State:</strong> {this.state.usaState.state}</div> */}
                <div className="data-item" id="data-updated"><strong>Data Updated:</strong> {this.state.usaState.lastUpdateEt}</div>
                <ToggleButtons />
                <br />

                <div className="data-title"><strong>Testing:</strong></div>
                <div className="data-item"><strong>Positive Cases:</strong> {this.state.usaState.positive}</div>
                <div className="data-item"><strong>Negative Cases:</strong> {this.state.usaState.negative}</div>
                <br />

                <div className="data-title"><strong>Hospitalization:</strong></div>
                <div className="data-item"><strong>Total Hospitalized:</strong> {this.state.usaState.hospitalizedCumulative}</div>
                <div className="data-item"><strong>Currently Hospitalized:</strong> {this.state.usaState.hospitalizedCurrently}</div>
                <div className="data-item"><strong>Currently in ICU:</strong> {this.state.usaState.inIcuCurrently}</div>
                <div className="data-item"><strong>Currently on Ventilator:</strong> {this.state.usaState.onVentilatorCurrently}</div>
                <br />

                <div className="data-title"><strong>Death:</strong></div>
                <div className="data-item"><strong>Deaths:</strong> {this.state.usaState.death}</div>
                <div className="data-item"><strong>Deaths Since Yesterday:</strong> {this.state.usaState.deathIncrease}</div>
                <br />

            </div>
        );
    }
}
