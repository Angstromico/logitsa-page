import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl:
      'https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png',
    iconSize: _iconSize,
  })
}

export default function Map() {
  const position = [10.001558512372108, -84.19696740738924]
  const size = { height: '100%', width: '100%' }

  return (
    <MapContainer
      style={size}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={GetIcon([25, 40])}>
        <Popup>Logitsa Cargo Service - Sede Alajuela</Popup>
      </Marker>
    </MapContainer>
  )
}
