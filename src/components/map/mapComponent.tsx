import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

const Map = () => {

    return (
        <MapContainer center={[30.616131817894647, -96.34003360046086]} zoom={15} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[30.616131817894647, -96.34003360046086]} icon={new Icon({iconUrl: './marker.png', iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}

export default Map
