import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default class SimpleExample extends Component {
  state = {
    lat: 54.1329,
    lng: 15.5833,
    zoom: 8
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        zoom: 15
      });
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <h1>Class Map</h1>
        <Map
          id="mapid"
          className="classmap"
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
