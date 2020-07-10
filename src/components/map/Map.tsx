import React, { useContext, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Polygon } from 'react-leaflet';
import IsochronePopup from '../popup/IsochronePopup';
import { StoreContext } from '../../context/StoreContext';

const LMap: React.FC = () => {
    const { setLocations, isochroneResult } = useContext(StoreContext)
    const [isochrone, setIsochrone] = useState<JSX.Element>()

    const CENTER = {
        lat: 48.7763,
        lng: 2.0639
    };

    useEffect(() => {
        setLocations([[CENTER.lat, CENTER.lng]])
        if (isochroneResult) setIsochrone(<Polygon positions={isochroneResult} />)
    }, [isochroneResult])

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
            {isochrone}
            <Marker position={[CENTER.lat, CENTER.lng]}>
                <IsochronePopup />
            </Marker>

        </Map>
    )
}

export default LMap;