import { Endpoint } from "./Endpoint";

export type NotificationParams = {
    attributes?: string[];
    sysAttrs?: boolean;
    format?: "normalized"|"concise"|"keyValues";
    showChanges?: boolean;
    endpoint?: Endpoint;
    status?: "ok"|"failed";
}
