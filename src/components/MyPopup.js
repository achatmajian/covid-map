import React from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import DataRender from "../components/DataRender.js";
import "./MyPopup.css"


export default function MyPopup({ selectedInfection, setSelectedInfection }) {
    return (
        <Popup
            latitude={selectedInfection.latitude}
            longitude={selectedInfection.longitude}
            closeOnClick={false}
            anchor="left"
            dynamicPosition={true}
            onClose={() => {
                setSelectedInfection(null);
            }}
        >

            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
                {selectedInfection.state}
            </h3>

            <div id="data-render">
                <DataRender
                    stateId={selectedInfection.id} />
            </div>
        </Popup>
    )
}

