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

                <Button value={1} variant="secondary">Deaths</Button>
                <Button value={2} variant="secondary">Hospitalizations</Button>
                <Button value={3} variant="secondary">Positive</Button>
                <Button value={4} variant="secondary">Negative</Button>
            </ToggleButtonGroup>
        </Row>

    );
}