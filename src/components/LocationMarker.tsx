import {
    Marker,
    Popup
  } from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import * as L from "leaflet"
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import { IoMdThunderstorm, IoMdAlert }  from 'react-icons/io'
import { WiVolcano } from 'react-icons/wi'
import { GiIceberg } from 'react-icons/gi'

interface LocationMarkerProps {
    coords: [number, number];
    title: string;
    id: string;
    type: string;
}

const LocationMarker = ({ coords, title, id, type }: LocationMarkerProps) => {
    
    const iconMarkup = type === "Wildfires" 
            ? renderToStaticMarkup(<MdOutlineLocalFireDepartment />)
            : type ==="Severe Storms" ? renderToStaticMarkup(<IoMdThunderstorm />)
            : type ==="Volcanoes" ? renderToStaticMarkup(<WiVolcano />)
            : type ==="Sea and Lake Ice" ? renderToStaticMarkup(<GiIceberg />)
            : renderToStaticMarkup(<IoMdAlert />)

    const mapIcon = L.divIcon({
        className: type === "Wildfires" ? 'fire-icon' : type === "Severe Storms" ? 'storm-icon' : type === "Volcanoes" ? 'volcano-icon' : type === "Sea and Lake Ice" ? 'ice-icon' : 'alert-icon',
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