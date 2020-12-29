import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export default class UsaCard extends React.Component {

    render() {
        return (
            <div style={{ position: "absolute", right: 0, marginTop: "580px", marginRight: "30px" }}>
                <Card>
                    <Card.Body style={{ fontSize: "10px" }}>This is some text within a card body.</Card.Body>
                </Card>
            </div>
        );
    }

}