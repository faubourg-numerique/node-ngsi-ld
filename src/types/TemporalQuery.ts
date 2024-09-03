export type TemporalQuery = {
    timerel?: "before"|"after"|"between";
    timeAt?: string;
    endTimeAt?: string;
    timeproperty?: "observedAt"|"createdAt"|"modifiedAt"|"deletedAt";
}
