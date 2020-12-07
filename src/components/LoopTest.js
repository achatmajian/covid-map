import React from "react";

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
                <div><strong>State:</strong> {this.state.usaState.state}</div>
                <div><strong>Data Updated Last:</strong> {this.state.usaState.lastUpdateEt}</div>
                <br />

                <div><strong>Testing:</strong></div>
                <div><strong>Number of Positive Cases:</strong> {this.state.usaState.positive}</div>
                <div><strong>Number of Negative Cases:</strong> {this.state.usaState.negative}</div>
                <br />

                <div><strong>Hospitalizations:</strong></div>
                <div><strong>Total Hospitalizations</strong> {this.state.usaState.hospitalizedCumulative}</div>
                <div><strong>Currently Hospitalized:</strong> {this.state.usaState.hospitalizedCurrently}</div>
                <div><strong>Currently in ICU:</strong> {this.state.usaState.inIcuCurrently}</div>
                <div><strong>Currently on Ventilator:</strong> {this.state.usaState.onVentilatorCurrently}</div>
                <br />

                <div><strong>Death:</strong></div>
                <div><strong>Number of Deaths:</strong> {this.state.usaState.death}</div>
                <div><strong>Deaths Since Yesterday:</strong> {this.state.usaState.deathIncrease}</div>
                <br />

            </div>
        );
    }
}
