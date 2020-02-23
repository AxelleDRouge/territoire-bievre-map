import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const LMap:React.FC = () => {
    
    const CENTER = {
        lat:48.7763,
        lng:2.0639
    };

    return (
        <Map
            center={[CENTER.lat, CENTER.lng]}
            zoom={13}
            id="mapId"
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[CENTER.lat, CENTER.lng]}>
                <Popup>Source de la Bièvre</Popup>
            </Marker>

        </Map>
    )
}

export default LMap;