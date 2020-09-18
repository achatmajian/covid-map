import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./App.css";
import data from "./data/data.json";
// import * as data from "./data/data.json";
// import * as d3 from "d3";
// import Test from "./components/Test";
// import Map from "./components/Map";

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
        // Map Connect & Logic
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data.map((infection) => (
          // Map Connect & Logic
          <Marker key={data.UID}>
            <div>INFECTION</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
