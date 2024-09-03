import { Property } from "./Property";
import { Relationship } from "./Relationship";
import { GeoProperty } from "./GeoProperty";

export type Entity = {
    id: string;
    type: string;
    [name: string]: any|Property|Relationship|GeoProperty;
};
