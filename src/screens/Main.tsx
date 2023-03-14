import React, { useEffect, useRef } from "react";
import useMap from "../hooks/useMap";
import useCurrentPosition from "../hooks/useCurrentPosition";
import logo from "../assets/react.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Main.css";

function MainMenu() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const position = useCurrentPosition();

  const map = useMap({
    mapContainer,
    center: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    if (!position) return;

    map.current.setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }, [position]);

  return (
    <div className="menu-container">
      <div ref={mapContainer} id="map-container" />
      <header>
        <div className="user-picture">
          <img src="https://identicons.github.com/tombertoli.png" />
        </div>
        <div className="create-party">
          <div className="clip">
            <div className="button">
              <span>+</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainMenu;
