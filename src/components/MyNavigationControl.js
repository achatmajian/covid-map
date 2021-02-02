import React from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";


export default function MyNavigationControl() {
    return (
        <div style={{ position: "absolute", right: 0, margin: "30px" }}>
            <NavigationControl />
        </div>
    )
}

