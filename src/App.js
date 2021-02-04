import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyMarker from "./components/MyMarker.js";
import MyPopup from "./components/MyPopup.js";
import MyPopup2 from "./components/MyPopup2.js";
import MyNavigationControl from "./components/MyNavigationControl.js";
import MyGeolocateControl from "./components/MyGeolocateControl.js";
// import Card from 'react-bootstrap/Card';
// import UsaCard from "./components/UsaCard.js";

export default function App() {

  const [viewport, setViewport] = useState({
    latitude: 39.828175,
    longitude: -98.5795,
    width: "100vw",
    height: "100vh",
    zoom: 3.8,
  });
  const [selectedInfection, setSelectedInfection] = useState(null);

  return (

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

      {/* {selectedInfection ? (
        <MyPopup2
          selectedInfection={selectedInfection} setSelectedInfection={setSelectedInfection}
          viewport={viewport}
          setViewport={setViewport}
        />
      ) : null} */}

      <MyNavigationControl />

      <MyGeolocateControl />

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
