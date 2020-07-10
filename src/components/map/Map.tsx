import React, { useContext, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Polygon, LayersControl } from 'react-leaflet';
import IsochronePopup from '../popup/IsochronePopup';
import { StoreContext } from '../../context/StoreContext';
import { Result } from '../../props';

const LMap: React.FC = () => {
    const { setLocations, isochroneResult } = useContext(StoreContext)
    const [isochrone, setIsochrone] = useState<JSX.Element[]>([])

    const CENTER = {
        lat: 48.7763,
        lng: 2.0639
    };

    useEffect(() => {
        setLocations([[CENTER.lng, CENTER.lat]])
        if (isochroneResult && isochroneResult.length > 0) {
            isochroneResult.forEach((iso: Result, index: number) => {
                const positions = iso.geometry.coordinates.map(value => value.map(latlng => [latlng[1], latlng[0]]))
                setIsochrone(isochrone.concat(<Polygon key={index} positions={positions} color={"orange"} />))
            })
        } else setIsochrone([])
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