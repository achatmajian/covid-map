import React from "react";
import Button from "react-bootstrap/ToggleButton";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "simple-flexbox";

export default function ToggleButtons() {
    const [value, setValue] = React.useState(1);
    const handleChange = val => setValue(val);

    return (
        <Row horizontal='center'>
            <ToggleButtonGroup
                size="sm"
                name="value"
                type="radio"
                value={value}
                onChange={handleChange}>

                <ToggleButton value={1} variant="secondary">Deaths</ToggleButton>
                <ToggleButton value={2} variant="secondary">Hospitalizations</ToggleButton>
                <ToggleButton value={3} variant="secondary">Positive</ToggleButton>
                <ToggleButton value={4} variant="secondary">Negative</ToggleButton>
            </ToggleButtonGroup>
        </Row>

    );
}