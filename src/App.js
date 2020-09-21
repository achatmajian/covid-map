import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import covidData from "./data/geojson.json";
import Chart from "./components/Chart.js";
import "./App.css";

export default function App() {
  /* ======= Viewport set up ======= */
  const [viewport, setViewport] = useState({
    latitude: 40.757535,
    longitude: -73.977085,
    width: "100vw",
    height: "100vh",
    zoom: 6.5,
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
        {covidData.features.map((infection) => (
          /* ======= Custom markers to locations pulled from data ======= */
          <Marker
            key={infection.properties.UID}
            latitude={infection.geometry.coordinates[1]}
            longitude={infection.geometry.coordinates[0]}
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
            latitude={selectedInfection.geometry.coordinates[1]}
            longitude={selectedInfection.geometry.coordinates[0]}
            onClose={() => {
              setSelectedInfection(null);
            }}
          >
            <div>
              <h2 style={{ textAlign: "center" }}>
                {selectedInfection.properties.Combined_Key}
              </h2>
            </div>
            <Chart />
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

//Test
