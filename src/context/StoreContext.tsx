import React, { useState, useEffect } from "react";
import { Profile, Itinerary } from "../props";
import { LatLng } from "leaflet";

const defaultContext: any = {}

export const StoreContext = React.createContext(defaultContext)

interface PropTypes {
    children: JSX.Element[]
}

export const StoreContextProvider: React.FC<PropTypes> = ({ children }: PropTypes) => {
    const defaultProfile = {
        value: "cycling-regular",
        name: "vélo"
    }
    const [profile, setProfile] = useState<Profile>(defaultProfile)
    const [locations, setLocations] = useState<LatLng[][]>([[]])
    const [value, setValue] = useState<number>(100)
    const [type, setType] = useState<string>('time')
    const [isochroneResult, setIsochroneResult] = useState<LatLng[][]>()

    useEffect(() => {
        const itinerary: Itinerary = {
            location_type: "start",
            locations: locations,
            range: [value],
            range_type: type
        }
        const api = "5b3ce3597851110001cf62487a9daef655ed48d691737507e56cfb21"
        fetch(`https://api.openrouteservice.org/v2/isochrones/${profile.value}`, {
            method: "POST",
            headers: {
                "Accept": "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
                "Authorization": api,
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(itinerary)
        }).then(result => result.json()
            .then(result => {
                if (result.features) setIsochroneResult(result.features.geometry.coordinates)
            }))
    }, [locations, type, profile, value])

    const store = {
        profile,
        setProfile,
        locations,
        setLocations,
        isochroneResult,
        setIsochroneResult,
        setType,
        setValue
    }

    return (
        <StoreContext.Provider value={store}>
            <section>
                {children}
            </section>
        </StoreContext.Provider>
    )
}