import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from '../../Components/Pin/Pin.jsx';

const Map = ({items}) => {
  return (
  
          <MapContainer center={[52.4797, -1.902669]} zoom={7} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item => (
        <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
)
  
}

export default Map
