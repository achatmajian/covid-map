import React from "react";
import ReactMapGL, {
    GeolocateControl
} from "react-map-gl";


export default function MyGeolocateControl() {

    return (
        <div
            style={{
                position: "absolute",
                right: 0,
                margin: "130px 30px 30px 30px",
            }}
        >
            <GeolocateControl
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
            />
        </div>
    )
}

