import React, { Suspense } from "react";
import '../../App.css';
import '../GalaxyMap.css';
import GalaxyMap from '../GalaxyMap';

function Map() {
  return (
    <Suspense fallback={<h1>Loading map...</h1>}>
      <h1 className="map">MAP</h1>
      <div className='section galaxy-map'>
          <h2 className='planetDescription'>Click a celestial body to find out more about it</h2>
          <GalaxyMap />
          <p>Scroll to zoom <br />Hold shift and drag to pan around</p>
      </div>
    </Suspense>
  );
}

export default Map;