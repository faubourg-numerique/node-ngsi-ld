import { Property } from "./Property";
import { GeoProperty } from "./GeoProperty";

export type Relationship = {
    type: "Relationship";
    object: string|string[];
    [name: string]: any|Property|Relationship|GeoProperty;
}
