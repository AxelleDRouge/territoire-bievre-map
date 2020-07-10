import { LatLng, Polygon } from "leaflet";

export interface Profile {
    value: string,
    name: string
}

export interface Itinerary {
    attributes: string[],
    interval: number,
    location_type: string,
    locations: number[][],
    range: number[],
    range_type: string,
    units: string
}

export interface Result {
    geometry: {
        coordinates: LatLng[][][]
    }
    properties: Feature
}

export interface Feature {
    area: number,
    center: number[]
    group_index: number,
    value: number
}