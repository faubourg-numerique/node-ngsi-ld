import { Polygon } from "./Polygon";

export type MultiPolygon = {
    type: "MultiPolygon";
    value: Polygon[];
}
