import { LatLng } from "leaflet";

export interface Profile {
    value: string,
    name: string
}

export interface Itinerary {
    location_type: string,
    locations: LatLng[][],
    range: number[],
    range_type: string
}