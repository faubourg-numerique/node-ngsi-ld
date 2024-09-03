import { KeyValuePair } from "./KeyValuePair";

export type Endpoint = {
    uri?: string;
    accept?: "application/json"|"application/ld+json"|"application/geo+json";
    timeout?: number;
    cooldown?: number;
    receiverInfo?: KeyValuePair[];
    notifierInfo?: KeyValuePair[];
}
