import React from "react";
// import ToggleButtons from "./ToggleButtons.js";
// import ToggleButtons3 from "./ToggleButtons3.js";
// import $ from "jquery";
import "./DataRenderStyles.css";
import Button from 'react-bootstrap/Button';
import { Row } from "simple-flexbox";
import "bootstrap/dist/css/bootstrap.min.css";

export default class DataRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Props for data rendering in pop up 
            loading: true,
            usaState: null,
            allStates: null,
            // Props for data toggle in pop up 
            showTesting: true,
            showHosp: false,
            showDeath: false,
        };
    }

    getData = async () => {
        const url = "https://api.covidtracking.com/v1/states/current.json";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    // Component fires when marker is clicked
    async componentDidMount() {
        const data = await this.getData();
        this.setState({ allStates: data });
        this.setState({ usaState: data[this.props.stateId], loading: false });
    }

    // Compares states from local JSON (stateId), compared to states pulled from api (allStates)
    componentDidUpdate(prevProps) {
        // Has current props
        const { stateId } = this.props;
        // Checks against stateID
        const { allStates } = this.state
        // If props from previous state don't equal stateId of current, render data for new state that is clicked
        if (prevProps.stateId !== stateId) {
            this.setState({ usaState: allStates[stateId], loading: false });
        }
    }

    //Toggle logic for testing data
    toggleTesting() {
        this.setState({
            showTesting: !this.state.showTesting
        })
    }

    //Toggle logic for hospitalization data
    toggleHosp() {
        this.setState({
            showHosp: !this.state.showHosp
        })
    }

    //Toggle logic for death data
    toggleDeath() {
        this.setState({
            showDeath: !this.state.showDeath
        })
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

                {/* US State Information */}
                <div className="data-title">
                    <strong>State Abbreviation:</strong> {this.state.usaState.state}
                </div>
                <div className="data-item" id="data-updated">
                    <strong>Data Updated:</strong> {this.state.usaState.lastUpdateEt}
                </div>

                {/* Toggle Buttons */}
                <Row horizontal='center'>
                    <Button onClick={() => this.toggleTesting()} variant="success" size="sm" id="test-btn" className="button">Testing</Button>
                    <Button onClick={() => this.toggleHosp()} variant="warning" size="sm" id="hosp-btn" className="button">Hospitalization</Button>
                    <Button onClick={() => this.toggleDeath()} variant="danger" size="sm" id="death-btn" className="button">Death</Button>
                </Row>

                <hr />

                {/* Testing Data Render */}
                {
                    this.state.showTesting ?
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
                        : null
                }

                <br />

                {/* Hospitalization Data Render */}
                {
                    this.state.showHosp ?
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
                        : null
                }

                <br />

                {/* Death Data Render */}
                {
                    this.state.showDeath ?
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
                        : null
                }

            </div>
        );
    }
}
