import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Optional: Fix marker icon issue with Leaflet in React (default icons won't show without this)
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";

function MapComponent({ latitude, longitude }) {
  const position = [latitude || 28.6139, longitude || 77.209]; // Default to center if no location is provided

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {latitude && longitude && (
        <Marker
          position={[latitude, longitude]}
          icon={L.icon({ iconUrl: markerIconPng, iconAnchor: [12, 41] })}
        >
          <Popup>You are here</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapComponent;
