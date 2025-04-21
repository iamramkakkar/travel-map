import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import cities from './cities.json';

// Default marker icon fix for Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  return (
    <div className="w-full h-screen">
      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city, idx) => (
          <Marker key={idx} position={city.coordinates}>
            <Popup>
              <strong>{city.name}</strong><br />
              {city.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
