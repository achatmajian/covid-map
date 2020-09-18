import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "./App.css";
// import * as d3 from "d3";
// import Test from "./components/Test";
// import Map from "./components/Map";

export default function App() {
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
      ></ReactMapGL>
    </div>
  );
}
