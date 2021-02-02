import React, { useState } from "react";
import ReactMapGL, {
  // Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
// import covidData from "./data/geojson.json";
// import statesCoordinates from "./data/states.json";
// import Chart from "./components/Chart.js";
// import Chart2 from "./components/Chart2.js";
// import ChartTest from "./components/ChartTest.js";
// import ToggleButtons from "./components/ToggleButtons.js";
import DataRender from "./components/DataRender.js";
import "./App.css";
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
// import UsaCard from "./components/UsaCard.js";
import MyMarker from "./components/MyMarker.js";
import MyPopup from "./components/MyPopup.js";

export default function App() {
  /* ======= Viewport set up ======= */
  const [viewport, setViewport] = useState({
    // latitude: 40.757535,
    // longitude: -73.977085,
    latitude: 39.828175,
    longitude: -98.5795,
    width: "100vw",
    height: "100vh",
    zoom: 3.8,
  });
  const [selectedInfection, setSelectedInfection] = useState(null);

  return (
    /* ======= Map render ======= */

    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      // mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >

      <MyMarker
        setSelectedInfection={setSelectedInfection}
      />

      {selectedInfection ? (
        <MyPopup
          selectedInfection={selectedInfection} setSelectedInfection={setSelectedInfection}
        />
      ) : null}

      <div style={{ position: "absolute", right: 0, margin: "30px" }}>
        <NavigationControl />
      </div>
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

      {/* USA Card */}
      {/* <div style={{ position: "absolute", right: 0, marginTop: "580px", marginRight: "30px" }}>
          <Card>
            <Card.Body style={{ fontSize: "10px" }}>This is some text within a card body.</Card.Body>
          </Card>
        </div> */}

      {/* <UsaCard /> */}

    </ReactMapGL>

  );
}
