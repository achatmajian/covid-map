import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ToggleButtons2() {
    const [checked, setChecked] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState("foo"); const radios = [
        { name: "Foo", value: "foo" },
        { name: "Bar", value: "bar" },
        { name: "Baz", value: "baz" }
    ];

    return (
        <>
            <ButtonGroup toggle className="mb-2">
                <ToggleButton
                    type="checkbox"
                    checked={checked}
                    value="1"
                    onChange={e => setChecked(e.currentTarget.checked)}
                >
                    Checkbox
        </ToggleButton>
            </ButtonGroup>
            <br />
            <ButtonGroup toggle>
                {radios.map((radio, index) => (
                    <ToggleButton
                        key={index}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={e => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}