import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React, { FC } from 'react'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

interface MarkerData {
    name: string,
    description: string,
    location: [number, number]
}

interface MarkerArray {
    markers: MarkerData[]
}

const Map = ({ markers }:MarkerArray) => {

    return (
        <MapContainer center={[30.616131817894647, -96.34003360046086]} zoom={15} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker:MarkerData) => (
            <Marker key={markers.indexOf(marker)} position={marker.location} icon={new Icon({iconUrl: './marker.png', iconSize: [25, 41], iconAnchor: [12, 41]})} >
                <Popup>
                {marker.name} <br /> {marker.description}
                </Popup>
            </Marker>
        ))}
        
        </MapContainer>
    )
}

export default Map
