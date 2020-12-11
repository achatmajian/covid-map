import React from "react";
import ToggleButtons from "./ToggleButtons.js";
import ToggleButtons3 from "./ToggleButtons3.js";
import $ from "jquery";
import "./DataRenderStyles.css";
import Button from 'react-bootstrap/Button';
import { Row } from "simple-flexbox";

export default class DataRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            usaState: null,
            allStates: null,
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

    toggleTesting() {
        this.setState({
            showTesting: !this.state.showTesting
        })
    }

    toggleHosp() {
        this.setState({
            showHosp: !this.state.showHosp
        })
    }

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

                <div className="data-title">
                    <strong>State Abbreviation:</strong> {this.state.usaState.state}
                </div>
                <div className="data-item" id="data-updated">
                    <strong>Data Updated:</strong> {this.state.usaState.lastUpdateEt}
                </div>

                <Row horizontal='center'>
                    <Button onClick={() => this.toggleTesting()} variant="success" size="sm" id="test-btn" className="button">Testing</Button>
                    <Button onClick={() => this.toggleHosp()} variant="warning" size="sm" id="hosp-btn" className="button">Hospitalization</Button>
                    <Button onClick={() => this.toggleDeath()} variant="danger" size="sm" id="death-btn" className="button">Death</Button>
                </Row>

                <hr />

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
