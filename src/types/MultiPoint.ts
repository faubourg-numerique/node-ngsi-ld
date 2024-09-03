import { Point } from "./Point";

export type MultiPoint = {
    type: "MultiPoint";
    value: Point[];
}
