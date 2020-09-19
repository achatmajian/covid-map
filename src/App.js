import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import covidData from "./data/geojson.json";

export default function App() {
  // Viewport Settings
  const [viewport, setViewport] = useState({
    latitude: 39.7837759,
    longitude: -95.4460149,
    width: "100vw",
    height: "100vh",
    zoom: 4,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {covidData.features.map((infection) => (
          <Marker
            key={infection.properties.UID}
            latitude={infection.geometry.coordinates[1]}
            longitude={infection.geometry.coordinates[0]}
          >
            <div>COVID</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
