import React from "react";
// import ToggleButtons from "./ToggleButtons.js";
// import ToggleButtons3 from "./ToggleButtons3.js";
// import $ from "jquery";
import "./DataRenderStyles.css";
import Button from 'react-bootstrap/Button';
import { Row } from "simple-flexbox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    AreaChart,
    Area,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList
} from "recharts";
import NumberFormat from 'react-number-format';

// const dataTest = [
//     { name: 'March', Tested: 4000, Hospitalized: 2400, Dead: 2400 },
//     { name: 'April', Tested: 3000, Hospitalized: 1398, Dead: 2210 },
//     { name: 'May', Tested: 2000, Hospitalized: 9800, Dead: 2290 },
//     { name: 'June', Tested: 2780, Hospitalized: 3908, Dead: 2000 },
//     { name: 'July', Tested: 1890, Hospitalized: 4800, Dead: 2181 },
//     { name: 'August', Tested: 2390, Hospitalized: 3800, Dead: 2500 },
//     { name: 'September', Tested: 3490, Hospitalized: 4300, Dead: 2100 },
// ];

const dataTest = [
    { name: 'March', Tested: 4000, Hospitalized: 2400, Dead: 2400 },
    { name: 'April', Tested: 3000, Hospitalized: 1398, Dead: 2210 },
    { name: 'May', Tested: 2000, Hospitalized: 9800, Dead: 2290 },
    { name: 'June', Tested: 2780, Hospitalized: 3908, Dead: 2000 },
    { name: 'July', Tested: 1890, Hospitalized: 4800, Dead: 2181 },
    { name: 'August', Tested: 2390, Hospitalized: 3800, Dead: 2500 },
    { name: 'September', Tested: 3490, Hospitalized: 4300, Dead: 2100 },
];

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
                {/* <div className="data-item">
                    <strong>Current Date:</strong> {this.state.usaState.date}
                </div> */}
                <div className="data-item">
                    <strong>Data Last Updated:</strong> {this.state.usaState.lastUpdateEt}
                </div>
                <div className="data-item" id="data-quality-padding">
                    <strong><a href="https://covidtracking.com/about-data/state-grades" target="_blank" rel="noopener noreferrer">Data Quality Grade:</a></strong> {this.state.usaState.dataQualityGrade}
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
                                <strong><a href="https://covidtracking.com/about-data/data-definitions#pcr-tests" target="_blank" rel="noopener noreferrer">Testing Data:</a></strong>
                            </div>
                            {/* <div className="data-item">
                                <strong>Confirmed Positive PCR Cases:</strong> {this.state.usaState.positiveCasesViral}
                            </div> */}
                            <div className="data-item">
                                <strong>Positive Cases:</strong> <NumberFormat value={this.state.usaState.positive} displayType={'text'} thousandSeparator={true} />
                                {/* {this.state.usaState.positive} */}
                            </div>
                            <div className="data-item">
                                <strong>Negative Cases:</strong> <NumberFormat value={this.state.usaState.negative} displayType={'text'} thousandSeparator={true} />
                                {/* {this.state.usaState.negative} */}
                            </div>
                            <br />
                        </div>
                        : null
                }

                {/* Hospitalization Data Render */}
                {
                    this.state.showHosp ?
                        <div id="hosp-data">
                            <div className="data-title">
                                <strong><a href="https://covidtracking.com/about-data/data-definitions#hospitalization" target="_blank" rel="noopener noreferrer">Hospitalization Data:</a></strong>
                            </div>
                            <div className="data-item">
                                <strong>Total Hospitalized:</strong> <NumberFormat value={this.state.usaState.hospitalizedCumulative} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.hospitalizedCumulative} */}
                            </div>
                            <div className="data-item">
                                <strong>Currently Hospitalized:</strong> <NumberFormat value={this.state.usaState.hospitalizedCurrently} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.hospitalizedCurrently} */}
                            </div>
                            <div className="data-item">
                                <strong>Currently in ICU:</strong> <NumberFormat value={this.state.usaState.inIcuCurrently} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.inIcuCurrently} */}
                            </div>
                            <div className="data-item">
                                <strong>Currently on Ventilator:</strong> <NumberFormat value={this.state.usaState.onVentilatorCurrently} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.onVentilatorCurrently} */}
                            </div>
                            <div className="data-item">
                                <strong>Hospitalizations Since Yesterday:</strong> <NumberFormat value={this.state.usaState.hospitalizedIncrease} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.hospitalizedIncrease} */}
                            </div>
                            <br />
                        </div>
                        : null
                }

                {/* Death Data Render */}
                {
                    this.state.showDeath ?
                        <div id="death-data">
                            <div className="data-title">
                                <strong><a href="https://covidtracking.com/about-data/data-definitions#outcomes" target="_blank" rel="noopener noreferrer">Death Data:</a></strong>
                            </div>
                            <div className="data-item">
                                <strong>Total Deaths:</strong> <NumberFormat value={this.state.usaState.death} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.death} */}
                            </div>
                            <div className="data-item">
                                <strong>Deaths Since Yesterday:</strong> <NumberFormat value={this.state.usaState.deathIncrease} displayType={'text'} thousandSeparator={true} />

                                {/* {this.state.usaState.deathIncrease} */}
                            </div>
                            <br />
                        </div>
                        : null
                }

                {/* Chart Render */}
                <div>
                    <div style={{ width: "600px", margin: "0 auto", height: "300px" }}>
                        <ResponsiveContainer>
                            <LineChart width={600} height={300} data={dataTest}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Tested" stroke="#28a745" />
                                <Line type="monotone" dataKey="Hospitalized" stroke="#ffc107" />
                                <Line type="monotone" dataKey="Dead" stroke="#e25a67" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        );
    }
}
