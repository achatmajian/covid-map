import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export default class UsaCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // Props for data rendering in pop up 
            // loading: true,
            country: true,
        };
    }

    getCountryData = async () => {
        const url = "https://api.covidtracking.com/v1/us/current.json";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    async componentDidMount() {
        const data = await this.getCountryData();
        this.setState({ country: data });
        console.log(data)
    }

    render() {
        return (
            <div style={{ position: "absolute", right: 0, marginTop: "500px", marginRight: "30px" }}>
                <Card>

                    <Card.Body style={{ textAlign: "center" }}>
                        <div><strong>United States</strong></div>
                        <div><strong>Data Last Updated: </strong></div>
                        <div><strong>Data Quality Grade: </strong></div>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}