import {
    Marker,
    Popup
  } from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import * as L from "leaflet"
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import { IoThunderstorm }  from 'react-icons/io'

interface LocationMarkerProps {
    coords: [number, number];
    title: String;
    id: String;
    type: String;
}

const LocationMarker = ({ coords, title, id, type }: LocationMarkerProps) => {
    const iconMarkup = renderToStaticMarkup(<MdOutlineLocalFireDepartment />)
    const mapIcon = L.divIcon({
        className: 'map-icon',
        html: iconMarkup,
        });

    return (        
        <Marker position={coords} icon={mapIcon} >
            <Popup>
            <div className="location-info">
                <h2>Event Location Info</h2>
                <h3>Event Type: <span className="event-info">{type}</span></h3>
                <ul>
                    <li>ID: <span className="event-info">{id}</span></li>
                    <li>Title: <span className="event-info">{title}</span></li>
                    <li>Latitude: <span className="event-info">{coords[0]}</span></li>
                    <li>Longitude: <span className="event-info">{coords[1]}</span></li>                
                </ul>
            </div>
            </Popup>
        </Marker>
    )
}

export default LocationMarker