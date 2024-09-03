import { EntitySelector } from "./EntitySelector";
import { GeoQuery } from "./GeoQuery";
import { NotificationParams } from "./NotificationParams";
import { TemporalQuery } from "./TemporalQuery";

export type Subscription = {
    id?: string;
    type?: "Subscription";
    subscriptionName?: string;
    description?: string;
    entities?: EntitySelector[];
    watchedAttributes?: string[];
    notificationTrigger?: string[];
    timeInterval?: number;
    q?: string;
    geoQ?: GeoQuery;
    csf?: string;
    isActive?: boolean;
    notification?: NotificationParams;
    expiresAt?: string;
    throttling?: number;
    temporalQ?: TemporalQuery;
    scopeQ?: string;
    lang?: string;
}
