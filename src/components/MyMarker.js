import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import statesCoordinates from "../data/states.json";


export default function MyMarker({ setSelectedInfection }) {
    return (
        statesCoordinates.map((infection) => {
            return (
                <Marker
                    key={infection.state}
                    latitude={infection.latitude}
                    longitude={infection.longitude}
                >
                    <button
                        className="marker-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedInfection(infection);
                        }}
                    >
                        <img src="/covid-icon.svg" alt="Covid Icon" />
                    </button>
                </Marker>
            );

        })
    )
}