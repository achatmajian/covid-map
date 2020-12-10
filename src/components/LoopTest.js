import React from "react";
import ToggleButtons from "./ToggleButtons.js";
import ToggleButtons3 from "./ToggleButtons3.js";
import "./LoopTestStyles.css";
import $ from "jquery";
import Button from 'react-bootstrap/Button';
import { Row } from "simple-flexbox";

export default class LoopTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            usaState: null,
            allStates: null,
            // showHospData: false,
        };
    }

    toggleData = () => {
        $("#test-btn").click(function () {
            $("#testing-data").hide();
        });
    }

    getData = async () => {
        const url = "https://api.covidtracking.com/v1/states/current.json";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    async componentDidMount() {
        const data = await this.getData();
        this.setState({ allStates: data });
        this.setState({ usaState: data[this.props.stateId], loading: false });
    }

    componentDidUpdate(prevProps) {
        const { stateId } = this.props;
        const { allStates } = this.state
        if (prevProps.stateId !== stateId) {
            this.setState({ usaState: allStates[stateId], loading: false });
        }
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

                <div className="data-title">
                    <strong>State:</strong> {this.state.usaState.state}
                </div>
                <div className="data-item" id="data-updated">
                    <strong>Data Updated:</strong> {this.state.usaState.lastUpdateEt}
                </div>

                <Row horizontal='center'>
                    <Button variant="success" size="sm" id="test-btn" className="button">Testing</Button>
                    <Button variant="warning" size="sm" id="hosp-btn" className="button">Hospitalization</Button>
                    <Button variant="danger" size="sm" id="death-btn" className="button">Death</Button>
                </Row>

                <hr />

                <div id="testing-data">
                    <div className="data-title">
                        <strong>Testing Data:</strong>
                    </div>
                    <div className="data-item">
                        <strong>Positive Cases:</strong> {this.state.usaState.positive}
                    </div>
                    <div className="data-item">
                        <strong>Negative Cases:</strong> {this.state.usaState.negative}
                    </div>
                </div>

                <br />

                <div id="hosp-data">
                    <div className="data-title">
                        <strong>Hospitalization Data:</strong>
                    </div>
                    <div className="data-item">
                        <strong>Total Hospitalized:</strong>{" "}
                        {this.state.usaState.hospitalizedCumulative}
                    </div>
                    <div className="data-item">
                        <strong>Currently Hospitalized:</strong>{" "}
                        {this.state.usaState.hospitalizedCurrently}
                    </div>
                    <div className="data-item">
                        <strong>Currently in ICU:</strong>{" "}
                        {this.state.usaState.inIcuCurrently}
                    </div>
                    <div className="data-item">
                        <strong>Currently on Ventilator:</strong>{" "}
                        {this.state.usaState.onVentilatorCurrently}
                    </div>
                </div>

                <br />

                <div id="death-data">
                    <div className="data-title">
                        <strong>Death Data:</strong>
                    </div>
                    <div className="data-item">
                        <strong>Deaths:</strong> {this.state.usaState.death}
                    </div>
                    <div className="data-item">
                        <strong>Deaths Since Yesterday:</strong>{" "}
                        {this.state.usaState.deathIncrease}
                    </div>
                </div>

                <br />
                {/* <ToggleButtons3 /> */}
            </div>
        );
    }
}
