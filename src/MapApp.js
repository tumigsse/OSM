import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapApp = () => {
  const [counter, changeCounter] = useState([54.12, 15.583]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(poss => {
      changeCounter([poss.coords.latitude, poss.coords.longitude]);
    });
  }, []);

  return (
    <div>
      <h1>Function Map</h1>
      <Map className="funcmap" center={counter} zoom="14">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={counter}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MapApp;
