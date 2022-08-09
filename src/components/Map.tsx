import {
  MapContainer,
  TileLayer
} from 'react-leaflet'
import LocationMarker from './LocationMarker'
import {EventData} from '../types'
// import { renderToStaticMarkup } from 'react-dom/server';
// import * as L from "leaflet";

interface MapProps {
  eventData: any;
  center: [number, number];
  zoom: number;
}

const Map = ({ eventData, center, zoom }: MapProps) => {
  let fires;
  if(eventData.length>0){
    fires = eventData.map((event: { id: String; categories: { id: String; title: String }[]; geometry: { coordinates: [number, number]; }[]; title: String; }) => {
      if (event.categories[0].id === "wildfires"){
        return <LocationMarker 
                  key={event.id} 
                  coords={[event.geometry[0].coordinates[1], event.geometry[0].coordinates[0]]} 
                  title={event.title} 
                  id={event.id}
                  type={event.categories[0].title}
              />
      }
      return null
    })
  }
  console.log(fires)
  const title = "Windy Creek Fire"

return (
  <>
  <MapContainer center={center} zoom={zoom} className="map-container">
\      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker coords={center} title={title} /> */}
      {fires}
    </MapContainer>
    </>
)
}

Map.defaultProps = {
  center: [33.91752, -116.78724],
  zoom: 7
}

export default Map