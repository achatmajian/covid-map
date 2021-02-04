import React from "react";
import ReactMapGL, { Popup, Viewport } from "react-map-gl";
import DataRender from "./DataRender.js";
import { Card, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyPopup2.css"


export default function MyPopup2({ selectedInfection, setSelectedInfection }) {
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

            {/* <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
                {selectedInfection.state}
            </h3> */}

            <br></br>
            <div className="pop-up">
                <Card id="card">

                    <Card.Body className="card-body" style={{ textAlign: "center" }}>

                        <DataRender stateId={selectedInfection.id} />
                        {/* <div>
                        <strong>United States</strong>
                    </div>
                    <div>
                        <strong>Data Last Updated:</strong>
                    </div>
                    <div>
                        <strong>Data Quality Grade:</strong>
                    </div> */}
                    </Card.Body>
                </Card>
            </div>

        </Popup>
    )
}

