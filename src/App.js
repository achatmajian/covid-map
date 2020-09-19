import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import covidData from "./data/geojson.json";

export default function App() {
  // Viewport Settings
  const [viewport, setViewport] = useState({
    latitude: 40.757535,
    longitude: -73.977085,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });
  const [selectedInfection, setSelectedInfection] = useState(null);

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
            <button
              className="marker-btn"
              oncClick={(e) => {
                e.preventDefault();
                setSelectedInfection(infection);
              }}
            >
              <img src="/covid-icon.svg" alt="Covid Icon" />
            </button>
          </Marker>
        ))}

        {selectedInfection ? (
          <Popup
            latitude={selectedInfection.geometry.coordinates[1]}
            longitude={selectedInfection.geometry.coordinates[0]}
            onClose={() => {
              setSelectedInfection(null);
            }}
          >
            <div>infection</div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
