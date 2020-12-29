import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
// import covidData from "./data/geojson.json";
import statesCoordinates from "./data/states.json";
// import Chart from "./components/Chart.js";
// import Chart2 from "./components/Chart2.js";
// import ChartTest from "./components/ChartTest.js";
// import ToggleButtons from "./components/ToggleButtons.js";
import DataRender from "./components/DataRender.js";
import "./App.css";

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
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {statesCoordinates.map((infection) => (
          /* ======= Custom markers to locations pulled from data ======= */
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
        ))}

        {selectedInfection ? (
          /* ======= Logic for modal and data displayed within ======= */
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
            <div>
              <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
                {selectedInfection.state}
              </h3>
            </div>
            {/* <ToggleButtons /> */}
            <DataRender stateId={selectedInfection.id} />
            {/* Whenever Popup is clicked, it takes id from local json file states.json and passes it to DataRender.js */}
          </Popup>
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
      </ReactMapGL>
    </div>
  );
}
