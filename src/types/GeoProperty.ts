import { Point } from "./Point";
import { LineString } from "./LineString";
import { Polygon } from "./Polygon";
import { MultiPoint } from "./MultiPoint";
import { MultiLineString } from "./MultiLineString";
import { MultiPolygon } from "./MultiPolygon";
import { Property } from "./Property";
import { Relationship } from "./Relationship";

export type GeoProperty = {
    type: "GeoProperty";
    value: Point|LineString|Polygon|MultiPoint|MultiLineString|MultiPolygon;
    [name: string]: any|Property|Relationship|GeoProperty;
}
