import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server';
import * as L from "leaflet";
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

const Map = () => {
  const mapData = {city: "Cabazon", state: "California", country: "USA", location: Object, current: Object}
  const center = [33.91752, -116.78724];
  const zoom = 7;
  const iconMarkup = renderToStaticMarkup(<MdOutlineLocalFireDepartment />);
  const mapIcon = L.divIcon({
    className: 'map-icon',
    html: iconMarkup,
  });
  // const mapIcon = new mapIcon({
  //   html: '<i class="fa fabeer fa-4x"></i>',
  //   iconSize: [20, 15],
  //   className: 'map-icon'
  // });
  // const mapIcon = L.divIcon({
  //   html: '<i class="fa fabeer fa-4x"></i>',
  //   iconSize: [20, 20],
  //   className: 'map-icon'
  // });

return (
  <>
  <MapContainer center={center} zoom={zoom} className="map-container">
      {/* <ChangeView center={center} zoom={zoom} /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={mapIcon}>
        <Popup>
          <div>
            {mapData.city}
            <br />
            {mapData.state}, {mapData.country}
            <br /> AQI: 4
          </div>
        </Popup>
      </Marker>
    </MapContainer>
    </>
)
}

export default Map