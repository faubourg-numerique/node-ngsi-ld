import { LineString } from "./LineString";

export type MultiLineString = {
    type: "MultiLineString";
    value: LineString[];
}
