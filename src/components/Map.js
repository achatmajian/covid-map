import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

class Map extends React.Component {
  render() {
    const [viewport, setViewport] = useState({
      latitude: 39.7837759,
      longitude: -95.4460149,
      width: "100vw",
      height: "100vh",
      zoom: 10,
    });

    return (
      <div>
        <ReactMapGL {...viewport}></ReactMapGL>
      </div>
    );
  }
}

export default Map;
