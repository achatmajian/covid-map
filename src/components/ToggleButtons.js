import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

class ToggleButtons extends React.Component {

    render() {
        const [radioValue, setRadioValue] = useState('1');
        const radios = [
            { name: 'Active', value: '1' },
            { name: 'Radio', value: '2' },
            { name: 'Radio', value: '3' },
        ];

        return (
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
}

export default ToggleButtons;