import React, { Component } from "react";

class ToggleButtons3 extends Component {
    constructor() {
        super();
        this.state = {
            name: "Data",
            showHideTesting: true,
            showHideHospitalization: false,
            showHideDeath: false
        };
        this.hideComponent = this.hideShowData.bind(this);
    }

    hideShowData(name) {
        console.log(name);
        switch (name) {
            case "showHideTesting":
                this.setState({ showHideTesting: !this.state.showHideTesting, showHideDemo2: false, showHideDeath: false });
                break;
            case "showHideHospitalization":
                this.setState({ showHideHospitalization: !this.state.showHideHospitalization, showHideTesting: false, showHideDeath: false });
                break;
            case "showHideDeath":
                this.setState({ showHideDeath: !this.state.showHideDeath, showHideTesting: false, showHideHospitalization: false });
                break;
            default:
                break;
        }
    }

    render() {
        const { showHideTesting, showHideHospitalization, showHideDeath } = this.state;
        return (
            <div>
                {showHideTesting && <Testing />}
                {showHideHospitalization && <Hospitalization />}
                {showHideDeath && <Death />}
                <div>
                    <button onClick={() => this.hideShowData("showHideTesting")}>Testing</button>
                    <button onClick={() => this.hideShowData("showHideHospitalization")}>Hospitalization</button>
                    <button onClick={() => this.hideShowData("showHideDeath")}>Death</button>
                </div>
            </div>
        )
    }

}

class Testing extends Component {
    constructor() {
        super();
        this.state = {
            name: "Data"
        };
    }

    render() {
        return <div>Testing Data Here</div>;
    }
}

class Hospitalization extends Component {
    constructor() {
        super();
        this.state = {
            name: "Data"
        };
    }

    render() {
        return <div>Hospitalization Data Here</div>;
    }
}

class Death extends Component {
    constructor() {
        super();
        this.state = {
            name: "Data"
        };
    }

    render() {
        return <div>Death Data Here</div>;
    }
}

export default ToggleButtons3;