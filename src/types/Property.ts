import { Relationship } from "./Relationship";
import { GeoProperty } from "./GeoProperty";

export type Property = {
    type: "Property";
    value: any;
    [name: string]: any|Property|Relationship|GeoProperty;
}
