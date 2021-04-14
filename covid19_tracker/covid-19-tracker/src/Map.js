import React from 'react';
import './Map.css';
//import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {MapContainer as LeafletMap,TileLayer} from "react-leaflet";

function Map  ({center,zoom})  {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                //url="https://b.tile.openstreetmap.org/16/53858/38957.png" 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            </LeafletMap>
        </div>
    )
}

export default Map;
