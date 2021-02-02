import React, { useState } from "react";
import ReactMapGL from "react-map-gl";


export default function MyMap() {

    const [viewport, setViewport] = useState({
        latitude: 39.828175,
        longitude: -98.5795,
        width: "100vw",
        height: "100vh",
        zoom: 3.8,
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            // mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
        />
    )
}

